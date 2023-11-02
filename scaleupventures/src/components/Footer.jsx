import { arrow } from '../assets/icons';

function Footer() {
	return (
		<footer className='bg-black py-[80px] lg:py-[300px] padding space-y-[80px] text-center text-[#F2F3FF] w-full'>
			<div className='space-y-[40px]'>
				<p className='text-[30px] lg:text-[35px] font-[400] leading-[34px] lg:leading-[26px] tracking-[-1.05px]'>
					Invest with <span className='font-bold'>ScaleUp Ventures</span>
				</p>
				<p className='text-[15px] font-[500] mx-auto max-w-[817px] leading-[26px] '>
					Partner with a dedicated and experienced team with a clear vision for
					success. <br />
					<br /> Our strategic approach ensures maximized returns, making
					ScaleUp Ventures a prime choice for partnering.
				</p>
			</div>
			<p className='text-[17.39px] font-[500] leading-[26px] '>
				Interested in partnering with ScaleUp Ventures and tapping into a unique
				market opportunity <br /> enriched with exclusive IP? <br />
				<br />
				<span className='font-bold'>
					Contact us to explore collaboration and investment possibilities.
				</span>
			</p>
			<div className='w-fit mx-auto'>
				<button
					onClick={() =>
						window.open('mailto:deals@scaleupventures.co', '_blank')
					}
					className='py-[20px] lg:py-[24px] w-[281px] border-t-2 border-b-2 flex justify-between items-center'>
					<p className='text-[14px] lg:text-[17.39px] leading-[26px] tracking-[2.435px] font-[700]'>
						CONTACT US
					</p>
					{arrow}
				</button>
			</div>
		</footer>
	);
}

export default Footer;
