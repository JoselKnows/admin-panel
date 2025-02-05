"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";



export default function AppSideMenu() {

  const pathName = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    if (pathName.startsWith("/bookmarks")) {
      setSelectedKey(["2"]);
    } else if (pathName.startsWith("/courses")) {
      setSelectedKey(["3"]);
    }
    else if (pathName.startsWith("/tutorials")) {
      setSelectedKey(["4"]);
    }
    else if (pathName.startsWith("/best-practices")) {
      setSelectedKey(["5"]);
    }
    else if (pathName.startsWith("/certificaions")) {
      setSelectedKey(["6"]);
    }
    else if (pathName.startsWith("/resources")) {
      setSelectedKey(["7"]);
    }
    else if (pathName.startsWith("/events")) {
      setSelectedKey(["8"]);
    }
    else if (pathName.startsWith("/comumunity")) {
      setSelectedKey(["9"]);
    }

    else if (pathName === "/") {
      setSelectedKey(["1"]);
    }

  }, [pathName]);

  const menuItems = [
    { label: <Link href="/">Home</Link>, key: 1 },
    { label: <Link href="/bookmarks">Bookmarks</Link>, key: 2 },
    { type: "divider" },
    { label: <Link href="/courses">Courses</Link>, key: 3 },
    { label: <Link href="/tutorials">Tutorials</Link>, key: 4 },
    { label: <Link href="/best-practices">Best Practices</Link>, key: 5 },
    { label: <Link href="/certificaions">Certifications</Link>, key: 6 },
    { type: "divider" },
    { label: <Link href="/resources">Resources</Link>, key: 7 },
    { label: <Link href="/events">Events</Link>, key: 8 },
    { label: <Link href="/comumunity">Community</Link>, key: 9 },

  ];
  return <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
} 
