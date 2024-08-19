import CustomShape from "@/components/elements/image/svg/custom-shape";

export enum Tab {
  ChooseAppointment = "Choose Appointment",
  YourInfo = "Your Info",
  Confirmation = "Confirmation",
}

type IProps = {
  tab?: Tab;
  onTabChange: (selectedTab: Tab) => void;
};

const TabItem = ({
  tab,
  currentTab,
  position,
}: {
  tab: Tab;
  currentTab: Tab;
  position: string;
}) => {
  const isActive = tab === currentTab;
  return (
    <div className={`py-2 absolute ${position}`}>
      <CustomShape
        text={tab}
        width={200}
        height={40}
        fillColor={isActive ? "#ffffff" : "#f3f3f3"}
        borderColor={isActive ? "#000000" : "#e0e0e0"}
      />
    </div>
  );
};

export default function TabGroup({
  tab = Tab.ChooseAppointment,
}: Readonly<IProps>) {
  return (
    <div className="flex justify-center relative">
      <TabItem
        tab={Tab.Confirmation}
        currentTab={tab}
        position="translate-x-40"
      />
      <TabItem tab={Tab.YourInfo} currentTab={tab} position="" />
      <TabItem
        tab={Tab.ChooseAppointment}
        currentTab={tab}
        position="-translate-x-40"
      />
      <div
        className={`absolute w-10 h-[39px] bg-white m-2 transform translate-x-64 border-l-2 ${
          tab === Tab.Confirmation ? "border-black" : "border-gray-300"
        }`}
      ></div>
    </div>
  );
}
