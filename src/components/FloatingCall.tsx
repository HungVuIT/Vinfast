import { CONTACT } from "@/lib/cars";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${CONTACT.phoneRaw}`}
      title="Gọi ngay cho chúng tôi"
      className="fixed bottom-5 left-5 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-[#003469] text-white shadow-lg"
    >
      <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#003469] opacity-60" />
      <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
      </svg>
    </a>
  );
}
