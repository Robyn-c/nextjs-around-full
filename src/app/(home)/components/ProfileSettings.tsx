import Image from "next/image";

function ProfileSettings() {
  return (
    <section className="pt-10 px-8 m-auto">
      <figure className="flex gap-4 items-center">
        <Image src="/profile-pic.jpg" alt="Image depicting explorer Jacques Cousteau" width={120} height={120}
        className="max-w-1/4 rounded-full"
        />
        <hgroup className="items-center">
          <h1 className="text-2xl font-semibold">Jacques Cousteau</h1>
          <p className="text-md">Explorer</p>
        </hgroup>
      </figure>
    </section>
  );
}

export default ProfileSettings;