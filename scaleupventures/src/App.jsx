import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import blurbg from './assets/bg.svg';
import './App.css';
import {
	BroadIndustry,
	acquision,
	arrow,
	bg,
	bigLogo,
	darkBorder,
	experiencedLeadership,
	house,
	investment,
	lightBorder,
	logo,
	revenueStream,
	strategicTech,
	targetBusiness,
	whiteDynamics,
} from './assets/icons';
import bgVid from './assets/bgVid.mp4';
import Footer from './components/Footer';
import { useEffect } from 'react';
function App() {
	const [count, setCount] = useState(0);
	const services = [
		{
			name: (
				<>
					Government <br />
					Contracting
				</>
			),
		},
		{
			name: (
				<>
					Growth <br /> Marketing  Firms
				</>
			),
		},
		{
			name: (
				<>
					Technology <br /> Enablers
				</>
			),
		},
	];
	const whyUs = [
		{
			desc: 'Led by industry veterans with a proven track record in acquisitions, technology integration, and business scaling.',
			title: 'Experienced <br />Leadership',
			icon: experiencedLeadership,
		},
		{
			desc: 'Access to a diverse network of advisors and mentors.',
			title: 'Broad Industry <br />Network',
			icon: BroadIndustry,
		},
		{
			desc: 'Integration of cutting-edge technologies and exclusive IP from government agencies.',
			title: 'Strategic Tech <br />Integration',
			icon: strategicTech,
		},
		{
			desc: 'Unique targeting to retiring baby boomers.',
			title: 'Boomer <br />Engagement',
			icon: experiencedLeadership,
		},
		{
			desc: 'Commitment to transparency and ethical business practices.',
			title: 'Trustworthy <br />Stewardship',
			icon: BroadIndustry,
		},
		{
			desc: 'Systematic approach to acquisitions and growth.',
			title: 'Model <br />Scaling',
			icon: strategicTech,
		},
	];
	const strategie = [
		{
			desc: 'Identify and acquire businesses, with a particular focus on those owned by retiring baby boomers.',
			id: 1,
			title: 'Acquisition & <br />Integration:',
		},
		{
			id: 3,
			mobId: 2,
			desc: 'Implement emerging technologies such as automation, AI, data analytics, and customer engagement tools.',
			title: 'Technology & IP <br />Enhancement:',
		},
		{
			id: 2,
			mobId: 3,
			desc: 'We delve deep into the acquired businesses to identify and address opportunities in marketing, operations, and technology.',
			title: 'Strategic Tech <br />Integration',
		},
		{
			id: 4,
			desc: "Our strategy doesn't just stop at growth. We structure and nurture these businesses with a clear exit strategy in mind. Our goal is to exit in 3-5 years, targeting an exit valuation of 4x the initial value.",
			title: 'Plan & Position <br />for Exit:',
		},
	];
	const oportunity = [
		{
			icon: whiteDynamics,
			desc: 'With 10,000 baby boomer business owners retiring daily and over 90% never selling their businesses, a vast market is ripe for revitalization.',
			title: 'Market <br />Dynamics',
		},
		{
			icon: acquision,
			desc: 'We acquire and integrate key IP, from esteemed institutions like NASA and other agencies & institutions, adding unique value and competitive advantages to our acquisitions.',
			title: 'Acquisition & <br />Integration:',
		},
		{
			icon: targetBusiness,
			desc: 'We focus on cash flowing businesses in Government Contracting, Growth Marketing, and Technology Enabling firms.',
			title: 'Target <br />Businesses',
		},
	];
	const Highlights = [
		{
			icon: investment,
			desc: 'Businesses with at least $300k in EBITDA and a maximum price of $20 million. market is ripe for revitalization.',
			title: 'Investment Criteria:',
		},
		{
			icon: revenueStream,
			desc: 'Anticipated revenue from the sale of enhanced businesses, ongoing operations, technology integration services, strategic partnerships, financial investments, and ancillary services.',
			title: 'Revenue Streams:',
		},
	];
	const playAllVideos = () => {
		const videos = document.querySelectorAll('video');
		for (let i = 0; i < videos.length; i++) {
			const video = videos[i];
			video.muted = true; // Force mute the video
			video.addEventListener('ended', () => {
				video.currentTime = 0; // Reset the video to the beginning
				video.play(); // Pause the video when it ends
			});

			video.play();
		}
	};

	useEffect(() => {
		playAllVideos();
	}, []);
	return (
		<div className='overflow-x-hidden'>
			<nav className='z-30 relative items-center h-[50px] lg:h-[80px] inset-0 flex justify-end lg:px-[70px] px-[30px] bg-[#070B32]'>
				<div>
					<a
						href='mailto:deals@scaleupventures.co'
						className='text-[17.39px]  uppercase text-white font-[500] leading-[26px] '>
						Contact Us
					</a>
				</div>
			</nav>
			<section className='relative'>
				<div className='absolute  bottom-0 w-full h-full '>
					<video
						src={bgVid}
						className='w-full  object-right h-full pt-[80vh] md:pt-[50vh]  lg:pt-[80vh] bottom-0 object-cover'
						loop
						autoPlay
						playsInline
						muted></video>
				</div>
				<div
					style={{
						background:
							'linear-gradient(0deg, #2C3372 0%, rgba(25, 30, 76, 0.00) 100%)',
					}}
					className='h-[120%] w-full absolute top-0 left-0'></div>
				<div className='absolute  z-20  h-[1000px] inset-0 '>
					<div className='bg-[#251D42] absolute blur-[40px] lg:blur-[122px] w-[140vw] -ml-[20vw] -mt-[40vh] h-[140vh] lg:h-[180vh]'></div>
					<div className='w-[650px] aspect-square ml-[10%] mt-[10%] blur-[182px] absolute bg-[#192193] rounded-full'>
						{' '}
					</div>
				</div>
				<div className='relative z-30 pb-[10vh] lg:pb-[60vh] space-y-[100px] lg:space-y-[233px]  text-white pt-[100px] lg:pt-[200px] padding '>
					<div className='space-y-[40px]'>
						<div>{logo}</div>
						<p className='text-[27px] lg:text-[42px] max-w-[692px] tracking-[-1.26px] lg:leading-[57px] font-[400]'>
							Helping Small Businesses from Scale to Sale with Partners,
							Positioning and IP
						</p>
						<p className='font-[400] text-[14px] lg:text-[18px] max-w-[909px]  leading-[26px] lg:leading-[40px] tracking-[0.36px]'>
							<span className='font-bold'>ScaleUp Ventures</span> is rolling up
							companies in 3 key verticals, infusing them cutting edge IP , cost
							and technology efficiencies to generate economies of scale and
							enterprise value. Our vision is to transform traditional
							operations, positioning them for exponential growth and creating
							modern, competitive investment opportunities across diverse
							sectors.
						</p>
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
					<div className='space-y-[70px]'>
						<div className='space-y-[40px]'>
							<p className='text-center font-[700] text-[30px] lg:text-[35px] tracking-[-1.05px] leading-[46px] mx-auto max-w-[560px]'>
								Sectors We Target{' '}
							</p>
							<p className='text-[18px] font-[400] text-white tracking-[0.36px] leading-[40px] text-center mx-auto max-w-[794px]'>
								<span className='font-bold'>ScaleUp Ventures</span> is rolling
								up companies in 3 key verticals, infusing them cutting edge IP ,
								cost and technology efficiencies to generate economies of scale
								and enterprise value.{' '}
							</p>
						</div>
						<div className='lg:flex space-y-[30px] lg:space-y-0 w-full justify-around'>
							{services.map((el, index) => (
								<div
									key={index}
									className='flex items-end space-x-10  lg:space-x-0 lg:space-y-[26px] lg:flex-col lg:items-center'>
									<div className=''>{house}</div>
									<p className=' lg:text-center  lg:mt-0 mt-10'>{el.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className='px-[30px] relative bg-[#2E3573]  lg:px-[100px]  py-[30px] lg:py-[60px] text-[#D5D5D5]'>
				<div className='space-y-[30px] lg:text-start text-center lg:-translate-y-[40vh]  lg:py-[90px] py-[60px] px-[20px] lg:px-[90px]  bg-[#251D42]  lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						Why Partner with ScaleUp <br />
						Ventures?
					</p>
					<div className='grid  lg:grid-cols-3 gap-x-[90px] gap-y-[30px] lg:gap-y-[70px]'>
						{whyUs.map((el, index) => (
							<div
								key={index}
								className='flex lg:space-x-[35px]'>
								<div className='lg:block hidden'>{darkBorder}</div>
								<div className='space-y-[25px]'>
									<div className='lg:mx-0 mx-auto w-fit'>{el.icon}</div>
									<p
										dangerouslySetInnerHTML={{ __html: el.title }}
										className='font-bold text-[17.39px] leading-[26px] '></p>
									<p className='font-[500] text-[15] leading-[26px] '>
										{el.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='space-y-[30px]  lg:-translate-y-[40vh]  lg:py-[90px] py-[60px] px-[20px] lg:px-[90px]  bg-[#1D2AF5]  lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						Strategy & Approach:{' '}
					</p>
					<div className='w-[164px] border-2 border-[#1D2AF5]'></div>
					<div className='grid  lg:grid-cols-2  gap-x-[90px] gap-y-[30px] lg:gap-y-[70px]'>
						{strategie.map((el, index) => (
							<div
								key={index}
								className={`flex space-x-[15px] lg:space-x-[25px] ${
									index === 0 ? 'lg:-ml-[20px]' : 'lg:ml-[20px]'
								}`}>
								<p className='text-[47.39px] lg:block hidden lg:w-fit w-[100px] font-bold'>
									{el.id}
								</p>
								<p className='text-[47.39px] lg:hidden  lg:w-fit w-[100px] font-bold'>
									{el.mobId ? el.mobId : el.id}
								</p>
								<div>{lightBorder}</div>
								<div className={`space-y-[25px] max-w-[539px] `}>
									<p
										dangerouslySetInnerHTML={{ __html: el.title }}
										className='font-bold text-[17.39px] leading-[26px] '></p>
									<p className='font-[500] text-[15] leading-[26px] '>
										{el.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='space-y-[30px] py-[50px] lg:py-[77px] text-white text-center  lg:-translate-y-[40vh] lg:space-y-[55px]'>
					<div className='w-fit mx-auto'>{bigLogo}</div>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						Unique Value Proposition:
					</p>
					<p className='font-[500] text-[15] leading-[26px] '>
						Unlocking the untapped potential of small businesses across sectors
						by infusing them with cutting-edge technologies, innovation, and
						exclusive intellectual property. We revitalize traditional
						operations with automation, data-driven insights, customer
						engagement, optimization, sustainability practices, and strategic IP
						integration, transforming them into modern, competitive, and
						attractive acquisition targets.
					</p>
				</div>
				<div className='space-y-[30px]  text-white text-center  lg:-translate-y-[40vh] lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						The Opportunity{' '}
					</p>
					<div className='grid  lg:grid-cols-3 gap-x-[90px] gap-y-[30px] lg:gap-y-[70px]'>
						{oportunity.map((el, index) => (
							<div
								className={`space-y-[25px] max-w-[539px] `}
								key={index}>
								<div className='w-fit mx-auto'>{el.icon}</div>
								<p
									dangerouslySetInnerHTML={{ __html: el.title }}
									className='font-bold text-[17.39px] leading-[26px] '></p>
								<p className='font-[500] text-[15] leading-[26px] '>
									{el.desc}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='space-y-[30px] text-center text-white pt-[50px] lg:pt-[90px]  lg:-translate-y-[40vh] lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						Financial Highlights{' '}
					</p>
					<div className='grid  lg:grid-cols-2 gap-x-[90px] gap-y-[30px] lg:gap-y-[70px]'>
						{Highlights.map((el, index) => (
							<div
								className={`space-y-[25px] s`}
								key={index}>
								<div className='mx-auto w-fit'>{el.icon}</div>
								<p className='font-bold text-[17.39px] leading-[26px] '>
									{el.title}
								</p>
								<p className='font-[500] text-[15] leading-[26px] '>
									{el.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer></Footer>
		</div>
	);
}

export default App;
