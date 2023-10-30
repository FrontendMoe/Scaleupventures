import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { arrow, house, logo } from './assets/icons'
import bgVid from './assets/bgVid.mp4'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
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
  ]
  const whyUs = [
    {
      desc:
        'Led by industry veterans with a proven track record in acquisitions, technology integration, and business scaling.',
      title: 'Experienced Leadership',
    },
    {
      desc: 'Access to a diverse network of advisors and mentors.',
      title: 'Broad Industry Network',
    },
    {
      desc:
        'Integration of cutting-edge technologies and exclusive IP from government agencies.',
      title: 'Strategic Tech Integration',
    },
    {
      desc: 'Unique targeting to retiring baby boomers.',
      title: 'Boomer Engagement',
    },
    {
      desc: 'Commitment to transparency and ethical business practices.',
      title: 'Trustworthy Stewardship',
    },
    {
      desc: 'Systematic approach to acquisitions and growth.',
      title: 'Model Scaling',
    },
  ]
  return (
    <div>
      <section className="relative ">
        <div className="absolute  w-full h-full inset-0">
          <video
            src={bgVid}
            className="w-full object-right h-full object-cover"
            loop
            autoPlay
            playsInline
            muted
          ></video>
        </div>
        <div className="relative space-y-[233px]  text-white py-[200px] padding bg-[#1d2bf5da]">
          <div className="space-y-[40px]">
            <div>{logo}</div>
            <p className="text-[42px] max-w-[692px] tracking-[-1.26px] leading-[57px] font-[400]">
              Helping Small Businesses from Scale to Sale with Partners,
              Positioning and IP
            </p>
            <p className="font-[400] text-[18px] leading-[40px] tracking-[0.36px]">
              <span className="font-bold">ScaleUp Ventures</span> is rolling up
              companies in 3 key verticals, infusing them cutting edge IP , cost
              and technology efficiencies to generate economies of scale and
              enterprise value. Our vision is to transform traditional
              operations, positioning them for exponential growth and creating
              modern, competitive investment opportunities across diverse
              sectors.
            </p>
            <button className="py-[24px] w-[281px] border-t-2 border-b-2 flex justify-between items-center">
              <p className="text-[17.39px] leading-[26px] tracking-[2.435px] font-[700]">
                CONTACT US
              </p>
              {arrow}
            </button>
          </div>
          <div className="space-y-[40px]">
            <p className="text-center font-[400] text-[35px] tracking-[-1.05px] leading-[46px] mx-auto max-w-[560px]">
              Sectors We Target to Consolidate Small Businesses
            </p>
            <div className="flex w-full justify-around">
              {services.map((el, index) => (
                <div
                  key={index}
                  className="flex space-y-[26px] flex-col items-center"
                >
                  <div className="">{house}</div>
                  <p className="text-center">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="padding py-[150px] text-[#6B6E9E]">
        <div className="space-y-[55px]">
          <p className="text-[35px] font-[400] leading-[46px] tracking-[-1.05px]">
            Why Partner with ScaleUp Ventures:
          </p>
          <div className="w-[164px] border-2 border-[#1D2AF5]"></div>
          <div className="grid grid-cols-3 gap-x-[90px] gap-y-[70px]">
            {whyUs.map((el, index) => (
              <div className="space-y-[25px]" key={index}>
                <p className="font-bold text-[17.39px] leading-[26px] ">
                  {el.title}
                </p>
                <p className="font-[500] text-[15] leading-[26px] ">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
