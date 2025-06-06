import Navbar from "@/components/Navbar";
import FooterBanner from "@/components/FooterBanner";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-sans">
            <div className="min-h-screen flex flex-col">
                <div className="sticky top-0 z-50 w-full">
                    <Navbar />
                </div>
                <div className="flex-1">
                    {children}
                </div>

                <FooterBanner />
            </div>
        </main>
    )
}