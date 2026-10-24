import { motion } from "framer-motion"

const LoadingSpinner = () => {
  return (
    <div>
      	<div className='min-h-screen bg-linear-to-br from-orange-900 via-pink-900 to-fuchsia-900 flex items-center justify-center relative overflow-hidden'>
			{/* Simple Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-orange-500 border-pink-200 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
    </div>
  )
}

export default LoadingSpinner
