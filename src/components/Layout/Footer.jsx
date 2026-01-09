const Footer = () => {
  return (
    <footer id="contact" className="bg-[#343a40] text-white py-12">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-[35%] text-justify">
          <h5 className="text-xl font-bold mb-4">Info</h5>
          <p className="text-sm leading-6">
            FnS Tour and Travel hadir untuk mewujudkan liburan impian Anda. Kami
            melayani paket wisata alam, budaya, dan kuliner terbaik di seluruh
            Nusantara dengan standar pelayanan profesional.
          </p>
        </div>

        <div className="md:w-[20%]">
          <h5 className="text-xl font-bold mb-4">Contact</h5>
          <p className="text-sm leading-6">
            Jl. Kirab Remaja No.32
            <br />
            Bukittinggi, Sumatera Barat
            <br />
            WA: +62 853-6596-8845
            <br />
            Email: fnsholiday@gmail.com
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-8 pt-8 border-t border-gray-600 text-center">
        <p className="text-sm">&copy; 2026 FnS Tour and Travel</p>
      </div>
    </footer>
  );
};

export default Footer;
