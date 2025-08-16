export const WelcomeSection = () => {
  return (
    <div id="welcome-section" className="bg-[var(--color-background)] w-full px-10">
      <div className="flex gap-6 pb-14 pt-24">
        <div className="w-1/2 flex flex-col justify-center gap-8 pr-10">
          <div className="text-4xl font-[agbalumo] text-[var(--color-primary-dark)]">Welcome to Mood Cafe</div>
          <div className="text-lg text-[var(--color-primary)]">
            Nestled in the heart of London, Mood Cafe is more than just a coffee shop—it's a space designed for
            connection, comfort, and exceptional flavors. Our mission is to serve expertly crafted coffee made from
            ethically sourced beans, paired with a selection of fresh, handcrafted pastries.{" "}
          </div>
        </div>
        <div className="w-1/2 flex items-end gap-5 pl-10">
          <div className="w-[17rem] h-[14rem] rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
              alt="img"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-[34rem] h-[28rem] rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-24 border-t-2 border-[var(--color-secondary)] text-lg font-semibold text-[var(--color-primary-dark)] p-14">
        <div>500+ Cups Served Daily</div>
        <div>50+ Fresh Pastries Baked Daily</div>
        <div>100% Ethically Sourced Beans</div>
      </div>
    </div>
  );
};
