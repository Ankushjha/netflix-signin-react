import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


export default function FaqsAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center pb-12">
        <div className="w-4/5">
          <Accordion className="bg-gray-900 mb-2.5 " open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(1)} >What is Netflix?</AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!

            </AccordionBody>
          </Accordion>

          <Accordion className="bg-gray-900 mb-2.5" open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(2)}>
              How much does Netflix cost?
            </AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
            </AccordionBody>
          </Accordion>

          <Accordion className="bg-gray-900 mb-2.5" open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(3)}>
              Where can I watch?
            </AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              <br />
              <br />
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </AccordionBody>
          </Accordion>

          <Accordion className="bg-gray-900 mb-2.5" open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(4)}>
              How do I cancel?
            </AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
            </AccordionBody>
          </Accordion>

          <Accordion className="bg-gray-900 mb-2.5" open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(5)}>
              What can I watch on Netflix?
            </AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </AccordionBody>
          </Accordion>

          <Accordion className="bg-gray-900 mb-2.5" open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader className="text-2xl text-gray-200 font-normal hover:text-gray-200 hover:bg-gray-800 px-5 py-7 border-b-transparent" onClick={() => handleOpen(6)}>
              Is Netflix good for kids?
            </AccordionHeader>
            <AccordionBody className="text-gray-200 text-2xl px-5 py-7 border-t-4 border-t-black">
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}