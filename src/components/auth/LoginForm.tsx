import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdAccountCircle, MdPassword } from "react-icons/md";


import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";


const LoginForm: React.FC = () => {
  interface FormData {
    email: string;
    password: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  

  const queryClient = useQueryClient();

  const {
    mutate: loginMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { email, password } = credentials;
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        
        // Ensure data has the expected structure
        if (data.user && data.token) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
        } else {
          console.warn("User or token not found in the response");
        }
        
        return data;
      } catch (error: unknown) {
        console.error(error);
        throw error;
      }
    },
    onSuccess: () => {
      // Navigate to home page after login success
      queryClient.invalidateQueries({ queryKey: ["authUser"] });

    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    loginMutation(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div>
      <div className="w-full text-left text-[#4A9B74] whitespace-nowrap overflow-hidden text-ellipsis mb-6">
          Sign in to your account
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="flex flex-col items-start space-y-2 py-2">
        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
        <BaseInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
          <MdAccountCircle className="text-3xl" />
        </label>
      </div>
      <div className="flex flex-col items-start space-y-2 py-2">
        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
        <BaseInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <MdPassword className="text-3xl"/>
        </label>
      </div>
      <div className="flex flex-col items-start space-y-2 py-2">
        <BaseButton type="submit">
          {isPending ? "Loading..." : "Login"}
        </BaseButton>
        {isError && <p className='text-red-500'>{(error as Error).message}</p>}
      </div>
      </form>
    </div>
  );
};
  
  export default LoginForm;