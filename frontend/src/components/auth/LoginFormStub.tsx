import { useState } from "react";
import { MdAccountCircle, MdPassword } from "react-icons/md";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";

const LoginFormStub: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(username, password);
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
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <MdAccountCircle className="text-3xl" />
            </label>
          </div>
          <div className="flex flex-col items-start space-y-2 py-2">
            <label className='input input-bordered rounded flex items-center gap-2 w-full'>
            <BaseInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MdPassword className="text-3xl"/>
            </label>
          </div>
          <div className="flex flex-col items-start space-y-2 py-2">
            <BaseButton type="submit">
              Login
            </BaseButton>
          </div>
          </form>
        </div>
    );
  }
 
  export default LoginFormStub;