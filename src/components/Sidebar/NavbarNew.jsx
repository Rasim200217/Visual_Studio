import React, { useState } from "react";
import SideBar from "./SideBar";

import { Menu, Button, Drawer, Group } from "@mantine/core";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavbarNew = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="h-screen sticky top-0 overflow-auto">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div>
        <Drawer opened={opened} onClose={() => setOpened(false)} size="sm">
          <SideBar />
        </Drawer>

        <Group position="center" className="">
          <Button onClick={() => setOpened(true)} className="lg:hidden">
            <HiOutlineMenuAlt4 size={20} />
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default NavbarNew;
