import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input
				type="text"
				placeholder="Search..."
				className="h-[35px] w-[223px] pl-2 pr-4 py-1 text-sm input input-bordered rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 font-light"
			/>
			<button type='submit' className='btn btn-circle bg-[#7fb598] text-white'>
				<BiSearchAlt className="w-6 h-6 outline-none text-black" />
			</button>
		</form>
	);
};

export default SearchInput;