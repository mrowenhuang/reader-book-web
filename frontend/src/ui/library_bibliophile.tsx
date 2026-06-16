import CountinueReading from "../components/continue_reading";
import SideBar from "../components/sidebar";

function LibraryBibliophile() {
  return (
    <>
      <div className="flex w-screen">
        <SideBar />
        <CountinueReading />
      </div>
    </>
  );
}

export default LibraryBibliophile;
