import Link from "next/link";
import { locations, navigation, siteConfig } from "@/data/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const euljiro = locations[0];
  const sinchon = locations[1];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Column 1 - 을지로점 */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase">
                {euljiro.nameEn}
              </h3>
            </div>
            <p className="text-lg font-bold mb-4">{euljiro.name}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">주소</span>
                <span>{euljiro.address}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">전화</span>
                <a href={`tel:${euljiro.phone}`} className="hover:text-white transition-colors">
                  {euljiro.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">평일</span>
                <span>{euljiro.hours.weekday}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">토요일</span>
                <span>{euljiro.hours.saturday}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">일요일</span>
                <span>{euljiro.hours.sunday}</span>
              </li>
            </ul>
            <a
              href={euljiro.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <InstagramIcon />
              <span>@euljiro_damjang</span>
            </a>
          </div>

          {/* Column 2 - 신촌점 */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase">
                {sinchon.nameEn}
              </h3>
            </div>
            <p className="text-lg font-bold mb-4">{sinchon.name}</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">주소</span>
                <span>{sinchon.address}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">전화</span>
                <a href={`tel:${sinchon.phone}`} className="hover:text-white transition-colors">
                  {sinchon.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">평일</span>
                <span>{sinchon.hours.weekday}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">토요일</span>
                <span>{sinchon.hours.saturday}</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-white/30">일요일</span>
                <span>{sinchon.hours.sunday}</span>
              </li>
            </ul>
            <a
              href={sinchon.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <InstagramIcon />
              <span>@sinchon_damjang</span>
            </a>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase">
                Quick Links
              </h3>
            </div>
            <p className="text-lg font-bold mb-4">{siteConfig.name}</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Links */}
            <div className="flex flex-col gap-2 mt-6">
              <a
                href={locations[0].kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white border border-[var(--color-accent)] hover:bg-[var(--color-accent)] transition-colors duration-200 w-fit"
              >
                카카오톡 채널
              </a>
              <a
                href={locations[0].naver}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white border border-[#03C75A] hover:bg-[#03C75A] transition-colors duration-200 w-fit"
              >
                네이버 예약
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={euljiro.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="을지로점 인스타그램"
              className="text-white/30 hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href={sinchon.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="신촌점 인스타그램"
              className="text-white/30 hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
