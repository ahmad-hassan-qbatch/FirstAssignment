import { ArrowRightOutlined } from "@ant-design/icons";
function DemoSection() {
  return (
    <div class="p-20 forQuery" >
      <div class="mx-3/4">
        <div className="w-50 content-center justify-center text-center">
          <p class="text-slate-800 text-4xl font-bold">
            Say Good bye to long Queues, big updates, and{" "}
            <span class="text-green-400">confusion</span>.
          </p>
          <p class="text-slate-800 text-xl">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum --- semper quis lectus
            nulla at volutpat diam ut veneatis.
          </p>
          <button
            type="button"
            class="text-white mt-1/2 px-3 bg-blue-500 px-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
          >
            Request Demo{" "}
            <ArrowRightOutlined className="text-slate-300 text-sm py-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
