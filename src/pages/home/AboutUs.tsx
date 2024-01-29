import BatteryReplacement from "@/components/BatteryReplacement";

const AboutUs = () => {
  return (
    <div className="app-container my-40">
      <div>
        <h2 className="text-center">
          Services that we provide
        </h2>
        <p className="max-w-[80ch] mx-auto mt-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum vitae aliquid rem saepe quam consequuntur vero neque unde tempore quibusdam 
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <BatteryReplacement />
        </div>
        <div className="col-span-5 rounded-2xl bg-red-500 p-5"></div>
        <div className="col-span-7 rounded-2xl bg-red-500 p-5"></div>
        <div className="col-span-12 rounded-2xl bg-red-500 p-5"></div>
        <div className="col-span-4 rounded-2xl bg-red-500 p-5"></div>
        <div className="col-span-4 rounded-2xl bg-red-500 p-5"></div>
        <div className="col-span-4 rounded-2xl bg-red-500 p-5"></div>
      </div>
    </div>
  );
};

export default AboutUs;