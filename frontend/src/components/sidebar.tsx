function SideBar() {
  return (
    <>
      <div className="flex w-[15vw] pt-15 pl-5 flex-col">
        <h1 className="uppercase font-light text-md text-accent-foreground mb-3">
          Collections
        </h1>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-3">
            <p className="">-</p>
            <p className="font-bold">Favorites</p>
          </div>
          <div className="flex gap-3">
            <p className="">-</p>
            <p>Favorites</p>
          </div>
          <div className="flex gap-3">
            <p className="">-</p>
            <p>Favorites</p>
          </div>
          <div className="flex gap-3">
            <p className="">-</p>
            <p>Favorites</p>
          </div>
          <div className="flex gap-3">
            <p className="">-</p>
            <p>Favorites</p>
          </div>
        </div>
        <h1 className="uppercase font-light text-md text-accent-foreground mb-3 mt-6">
          genres
        </h1>
        <div className="flex flex-col gap-2.5">
          <p>Favorites</p>
          <p>Favorites</p>
          <p>Favorites</p>
          <p>Favorites</p>
          <p>Favorites</p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
