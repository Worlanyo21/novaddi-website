"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowUpRight, HeartPulse, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Service = () => {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: digital, inView: digitalView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: wellness, inView: wellnessView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: uriscan, inView: uriscanView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pharmacy, inView: pharmacyView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: devices, inView: devicesView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: corporate, inView: corporateView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: supplier, inView: supplierView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: mediVault, inView: mediVaultView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50 py-16 text-black">
      <div className="container-custom mt-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gradient-to-br from-[#41B782] to-teal-900 h-fit w-fit rounded-4xl px-4"
        >
          <h1 className="text-white text-lg font-semibold p-2  flex  items-center">
            Our Services
          </h1>
        </motion.div>

        <motion.div
          ref={digital}
          initial={{ opacity: 0, y: 50 }}
          animate={digitalView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                1
              </span>
              Digital Prescription Fulfillment
            </h1>

            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Upload your prescription in seconds (photo or e-Rx)
              </li>
              <li className="mt-3">
                Get a pharmacist safety review for dose, interactions, and
                contraindications.
              </li>
              <li className="mt-3">
                Receive serialized, authentic medicines from trusted suppliers
                (where applicable) in tamper-evident packaging.
              </li>
              <li className="mt-3">
                Pick your delivery: home, office, pick-up, or smart locker with
                live tracking (in select locations).
              </li>
              <li className="mt-3">
                Turn on auto-refills and reminders via MediVault in the Knoxxi
                Health app
              </li>
            </ol>
          </div>
          <div className="my-10 w-full ">
            <Image
              src="/prescription.jpg"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={wellness}
          initial={{ opacity: 0, y: 50 }}
          animate={wellnessView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                2
              </span>
              Wellness Packs
            </h1>
            <p className="ml-8 text-lg">
              Each Pack pairs delivery by Novaddi with adherence support via{" "}
              <span className="font-semibold">
                MediVault in the Knoxxi Health app.
              </span>
            </p>
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Hypertension Pack —{" "}
                <span className="font-light ">
                  Medicines, a home blood pressure monitor, monthly checks,
                  lifestyle nudges.
                </span>
              </li>
              <li className="mt-3">
                Diabetes Pack — Medicines, glucometer + strips, Enterprise
                UriScan for kidney checks, nutrition tips.
              </li>
              <li className="mt-3">
                Women’s Health Pack — Reproductive, maternal, or menopause
                support with tests and supplements.
              </li>
              <li className="mt-3">
                Men’s Health Pack — Prostate support, lipid/glucose checks,
                kidney-focused urinalysis.
              </li>
              <li className="mt-3">
                Family Pack — Affordable refills and rapid tests for households.
              </li>
              <li className="mt-3">
                Senior Pack — Chronic refills, checks, bone/joint support,
                caregiver dashboards.
              </li>
              <li className="mt-3">
                Preventive Pack — Urinalysis strips, malaria/STI kits, activity
                guidance.
              </li>
              <li className="mt-3">
                Corporate Pack — On-site screenings, deliveries, anonymized
                dashboards.
              </li>
            </ol>
          </div>

          <div className="my-10 w-full ">
            <Image
              src="/senior.jpg"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={uriscan}
          initial={{ opacity: 0, y: 50 }}
          animate={uriscanView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                3
              </span>
              Enterprise UriScan
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Results in minutes with clear next steps.
              </li>
              <li className="mt-3">
                QR-validated strips for authenticity and expiry.
              </li>
              <li className="mt-3">
                Deploy at scale in pharmacies, workplaces, schools, and
                communities.
              </li>
              <li className="mt-3">
                Private for individuals, anonymized roll-ups for organizations.
              </li>
              <li className="mt-3">
                Lower total cost via early detection and fewer missed
                follow-ups.
              </li>
            </ol>
          </div>

          <div className="my-10 w-full ">
            <Image
              src="/urinalysis2.webp"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={pharmacy}
          initial={{ opacity: 0, y: 50 }}
          animate={pharmacyView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                4
              </span>
              Partner-Pharmacy Network
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Diagnostic corners: blood pressure, glucose, cholesterol, rapid
                tests.
              </li>
              <li className="mt-3">
                Telepharmacy consults via Novaddi (recorded and auditable).
              </li>
              <li className="mt-3">
                Novaddi-Verified badge for quality and training.
              </li>
              <li className="mt-3">
                In-app marketplace visibility and performance dashboards.
              </li>
            </ol>
          </div>

          <div className="my-10 w-full ">
            <Image
              src="/telepharmacy.jpg"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={devices}
          initial={{ opacity: 0, y: 50 }}
          animate={devicesView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                5
              </span>
              Medical Devices & Consumables
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Devices — Blood pressure monitors, glucometers, oximeters,
                scales, thermometers.
              </li>
              <li className="mt-3">
                Diagnostics — Urinalysis strips,
                malaria/HIV/COVID-19/pregnancy/cholesterol tests
              </li>
              <li className="mt-3">
                Chronic Care — Test strips, lancets, insulin supplies, inhalers,
                nebulizers, cold-chain carriers.
              </li>
              <li className="mt-3">
                Protection & First-Aid — Masks, gloves, disinfectants, wound
                care, emergency kits.
              </li>
              <li className="mt-3">
                Bundles & Subscriptions — Screening packs and
                device-plus-consumable subscriptions.
              </li>
            </ol>
          </div>
          <div className="my-10 w-full ">
            <Image
              src="/oximeter.jpg"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={corporate}
          initial={{ opacity: 0, y: 50 }}
          animate={corporateView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                6
              </span>
              Corporate & Institutional Health
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                On-site screening days (blood pressure, glucose, urinalysis,
                cholesterol) with same-day insights.
              </li>
              <li className="mt-3">
                Direct-to-employee delivery with scheduled refills (adherence
                supported by MediVault in the Knoxxi Health app).
              </li>
              <li className="mt-3">
                Anonymized dashboards tracking participation and outcomes—not
                identities.
              </li>
            </ol>
          </div>
          <div className="my-10 w-full ">
            <Image
              src="/screening.jpg"
              alt="group1"
              width={800}
              height={500}
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={supplier}
          initial={{ opacity: 0, y: 50 }}
          animate={supplierView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                7
              </span>
              Pharma & Supplier Collaboration
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Predictive demand signals to align production and distribution.
              </li>
              <li className="mt-3">
                Real-world evidence (de-identified) on adherence and outcomes.
              </li>
              <li className="mt-3">
                Ethical trial recruitment with consent-first pathways.
              </li>
              <li className="mt-3">
                Serialization and provenance for recall readiness and assurance.
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          ref={mediVault}
          initial={{ opacity: 0, y: 50 }}
          animate={mediVaultView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-gray-100 p-10 px-16 rounded-4xl mt-6"
        >
          <div className="my-8">
            <h1 className="text-2xl font-bold flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              <span className="p-1 px-2  text-white text-xs bg-gradient-to-br from-[#41B782] to-teal-900 rounded-full w-fit h-fit">
                8
              </span>
              MediVault (Medication Adherence) — in the Knoxxi Health App
            </h1>
            <p className="ml-8 text-lg mt-1">
              MediVault is built into the Knoxxi Health app and works
              hand-in-hand with Novaddi’s delivery.
            </p>
            <h1 className="text-xl font-semibold ml-8 flex items-center gap-x-2 underline bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
              Features:
            </h1>
            {/* <p className='ml-8 text-lg'>Each Pack pairs delivery by Novaddi with adherence support via <span className='font-semibold'>MediVault in the Knoxxi Health app.</span></p> */}
            <ol className="list-disc list-inside ml-8 font-semibold">
              <li className="mt-3">
                Simple schedule builder with dose, time, frequency.
              </li>
              <li className="mt-3">
                Reminders with “taken,” “snooze,” or “skip.”
              </li>
              <li className="mt-3">
                Adherence streaks & history in plain charts.
              </li>
              <li className="mt-3">
                Low-supply alerts with direct reorder path.
              </li>
              <li className="mt-3">Caregiver sharing (optional).</li>
              <li className="mt-3">
                Appointment summaries for easy doctor visits.
              </li>
              <li className="mt-3">Privacy-first controls.</li>
            </ol>
          </div>
          <div>
            <p className="text-md font-semibold">
              <span className="text-xl font-semibold bg-gradient-to-br from-[#41B782] to-teal-950 bg-clip-text text-transparent">
                Why it matters:
              </span>{" "}
              Novaddi ensures you receive the right medicines; MediVault in the
              Knoxxi Health app helps you take them correctly and consistently.
            </p>
          </div>
          {/* <div className="my-10 w-full ">
                    <Image src="/screening.jpg" alt="group1" width={800} height={500} className="w-full h-[500px] rounded-xl object-cover"/>
        
                </div> */}
        </motion.div>

        <div className=" mt-16 rounded-xl bg-gradient-to-br from-[#41B782] to-teal-900 w-full h-[400px] flex flex-col items-center justify-center text-center text-white">
          <HeartPulse className="bg-white rounded-full p-2 text-slate-900 w-10 h-10 my-1" />
          <p className="font-bold text-3xl">Ready to Transform Your Health? </p>
          <p className="text-xl w-[60%] mt-2">
            Interested in partnering with us, joining our care team, or learning
            more about how Novaddi is transforming health? We’d love to hear
            from you!
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="relative p-3 mt-4 px-4 font-semibold   overflow-hidden group rounded-full cursor-pointer bg-gradient-to-br from-[#41B782] to-teal-950 backdrop-blur-2xl "
          >
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
            <span className="relative flex items-center z-10 text-white group-hover:text-black transition-colors duration-400">
              Reach out to us
              <span className="ml-2 relative w-7 h-7">
                {/* ArrowUpRight (default) */}
                <ArrowUpRight
                  className="absolute inset-0 h-7 w-7 p-1 rounded-full bg-white text-slate-900 
                   transition-transform duration-500
                   group-hover:rotate-45 group-hover:opacity-0"
                />
                {/* ArrowRight (hover) */}
                <ArrowRight
                  className="absolute inset-0 h-7 w-7 p-1 rounded-full bg-white text-slate-900 
                   opacity-0 rotate-[-45deg] 
                   transition-transform duration-500
                   group-hover:rotate-0 group-hover:opacity-100 group-hover:bg-gradient-to-br from-[#41B782] to-teal-950 group-hover:text-white"
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
