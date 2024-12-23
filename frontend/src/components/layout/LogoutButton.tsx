import { LogOut } from "lucide-react";
import { useLogout } from "../../hooks/AuthHooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<LogOut className='w-4 h-4 text-[#7fb598] cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};

export default LogoutButton;
