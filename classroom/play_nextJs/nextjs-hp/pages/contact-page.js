import Image from "next/image";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Content info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
          ></Image>
        </div>
        <div className="mt-4">
          <p className="font-bold">name</p>
          <p className="mt-3">little boss</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
