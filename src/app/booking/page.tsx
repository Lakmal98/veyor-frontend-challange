import SessionType from "@/components/session-type";
import TabGroup from "@/components/tab-group";

export default function Booking() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-around p-1">
            <div className="flex flex-col items-center">
                <h1 className="text-8xl">Book a wellness session.</h1>
                <p className="text-lg pt-10">Visit one of our expert consultants to get yourself feeling 100% again.</p>
            </div>
            <div className="flex flex-col items-center">
                <TabGroup />
                {/* Additional spacing  */}
                <div className="h-12"></div>
                <SessionType />
                <SessionType />
                <SessionType />
            </div>
        </div>
    );
}
