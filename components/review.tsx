import Image from "next/image";

export default function Review({
  review: { stars, name, company, thumbnail = "", text },
}) {
  const starIcons = [];
  for (let i = 1; i <= stars; i++) {
    starIcons.push(
      <Image key={i} src="/icons/star.svg" alt="" width={18} height={17} />
    );
  }

  const randomcolor = ["#A7D7F84D", "#FCD4E54D", "#FCFAC44D"];

  return (
    // intial-width: 577
    <div className="border rounded-lg max-w-[577px] mx-auto grid sm:grid-cols-2 grid-cols-1 p-4 shadow">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-left font-medium text-[14px]">
            {stars}.0 Star{stars > 1 ? "s" : ""}
          </p>
          <div className="flex gap-1 my-2">{starIcons}</div>
        </div>

        <div className="flex sm:mb-2 mb-4">
          <Image
            src="/icons/reviewer_thumb.svg"
            alt=""
            width={48}
            height={48}
            className="block border-full"
          />
          <div className="text-left ml-2">
            <h3 className="capitalize font-semibold text-[16px]">
              {name || "Client Name"}
            </h3>
            <p className="text-[14px]">{company || "Company"}</p>
          </div>
        </div>
      </div>
      <div
        className="rounded-lg bg-opacity-30 p-6"
        style={{
          backgroundColor:
            randomcolor[Math.floor(Math.random() * randomcolor.length)],
        }}
      >
        <Image src="/icons/quotes.svg" alt="" width={29} height={24} />
        <p className="mt-5">{text}</p>
      </div>
    </div>
  );
}
