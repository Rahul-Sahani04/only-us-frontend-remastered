"use client";

import React, { useState } from "react";

import { Button } from "../raw_components/ButtonVariants";

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../raw_components/raw_drawer";

export function FriendsDrawer({ editOpen, showEdit, closeEdit }) {


  return (
    <>
      <div className="flex justify-center">
        <Drawer
          open={editOpen}
          onOpenChange={(modalOpened) => {
            if (!modalOpened) {
              closeEdit();
            }
          }}
        >
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>FriendList</DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Since - 2024
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p>Note</p>
            </DrawerBody>
            <DrawerFooter className="mt-6">
              <DrawerClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DrawerClose>
              <Button className="w-full sm:w-fit" onClick={() => closeEdit()}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
