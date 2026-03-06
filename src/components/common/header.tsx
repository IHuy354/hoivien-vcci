"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { UserNav } from "./user-nav";
import { cn } from "@/lib/utils";
import { buildAbilityFor } from "@/configs/acl";
import useProfileStore from "@/stores/profile";
import { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, NavigationItem } from "@/configs/navigation";

interface HeaderProps {
  title?: string;
}

export default function Header({}: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const role_code = useProfileStore((state) => state.role_code);
  const ability = buildAbilityFor(role_code);

  const filteredNavigation = navigation.filter((item) => ability.can('read', item.subject));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isItemActive = (item: NavigationItem) => {
    if (item.href) {
      return pathname === item.href;
    }
    if (item.children) {
      return item.children.some((child) => pathname.startsWith(child.href));
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="flex h-auto items-center justify-between px-4 lg:px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="SMEQ Logo"
              width={120}
              height={40}
              className="rounded-lg object-cover"
              priority
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex flex-1 mx-8 justify-center items-center" ref={dropdownRef}>
          <nav className="flex flex-wrap gap-1">
            {filteredNavigation.map((item) => {
              const isActive = isItemActive(item);
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.name;

              return (
                <div key={item.name} className="relative">
                  {hasChildren ? (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setOpenDropdown(isOpen ? null : item.name)
                        }
                        className={cn(
                          "flex items-center gap-1 whitespace-nowrap transition-all duration-200",
                          isActive || isOpen
                            ? "bg-[#19426D] text-white hover:bg-[#0f3b5a]"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#19426D]"
                        )}
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180"
                          )}
                        />
                      </Button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute top-full left-0 mt-1 min-w-[400px] bg-white rounded-lg shadow-lg border p-4 z-50">
                          <div className="grid grid-cols-2 gap-2">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={cn(
                                    "block px-4 py-3 rounded-md text-sm transition-colors",
                                    isChildActive
                                      ? "bg-[#19426D] text-white"
                                      : "text-gray-700 hover:bg-gray-100 hover:text-[#19426D]"
                                  )}
                                >
                                  {child.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href || "#"}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "flex items-center gap-1 whitespace-nowrap transition-all duration-200",
                          isActive
                            ? "bg-[#19426D] text-white hover:bg-[#0f3b5a]"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#19426D]"
                        )}
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                      </Button>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Navigation */}
          {/* <UserNav /> */}

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center h-16 px-4 border-b">
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/logo.jpg"
                      alt="SMEQ Logo"
                      width={120}
                      height={40}
                      className="rounded-lg object-cover"
                    />
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-4 px-2 justify-center items-center space-y-1 overflow-y-auto">
                  {filteredNavigation.map((item) => {
                    const isActive = isItemActive(item);
                    const hasChildren =
                      item.children && item.children.length > 0;

                    if (hasChildren) {
                      return (
                        <MobileNavItem
                          key={item.name}
                          item={item}
                          pathname={pathname}
                          onClose={() => setMobileMenuOpen(false)}
                        />
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 h-12",
                            isActive
                              ? "bg-[#19426D] text-white hover:bg-[#0f3b5a]"
                              : "text-gray-700 hover:bg-gray-100 hover:text-[#19426D]"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.name}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <div className="border-t p-4">
                  <div className="text-xs text-gray-500 text-center">
                    <div className="font-medium text-gray-700">SMEQ System</div>
                    <div>© 2025 All rights reserved</div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Mobile navigation item with expandable children
function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavigationItem;
  pathname: string;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = item.children?.some((child) =>
    pathname.startsWith(child.href)
  );

  return (
    <div>
      <Button
        variant={isActive ? "default" : "ghost"}
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full justify-between gap-3 h-12",
          isActive
            ? "bg-[#19426D] text-white hover:bg-[#0f3b5a]"
            : "text-gray-700 hover:bg-gray-100 hover:text-[#19426D]"
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className="h-5 w-5" />
          <span className="font-medium">{item.name}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isExpanded && "rotate-180"
          )}
        />
      </Button>

      {isExpanded && (
        <div className="ml-8 mt-1 space-y-1">
          {item.children?.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <Link key={child.href} href={child.href} onClick={onClose}>
                <Button
                  variant={isChildActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start h-10",
                    isChildActive
                      ? "bg-[#19426D] text-white hover:bg-[#0f3b5a]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#19426D]"
                  )}
                >
                  {child.name}
                </Button>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
