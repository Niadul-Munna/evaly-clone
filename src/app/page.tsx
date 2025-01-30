// import HappyHour from "@/components/happy-hour";
import FlashSell from "@/components/flash-sell";
import { FlashSellCarousel } from "@/components/flash-sell-carousel";
import { Posts } from "@/components/Posts";

export default function Home() {
  return (
    <div>
      {/* <HappyHour /> */}
      {/* <Posts /> */}
      <FlashSell />
      <FlashSellCarousel />
    </div>
  );
}
