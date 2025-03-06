import Image from "next/image";

import { UserRound } from "lucide-react";
import logoutAction from "../(auth)/(logout)/logoutAction";
import Form from "next/form";
import { auth } from "@/auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default async function NavbarPlataforma() {
  const session = await auth();

  return (
    <div className="bg-slate-300 items-center flex justify-between px-10 py-3">
      <div className="flex items-center">
        <a href="#home">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Next.js logo"
            width={120}
            height={100}
            priority
          />
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <a href="/plataforma">Página Inicial</a>
        <a href="/plataforma/meus-cursos"> Meus Cursos</a>
        <a href="/plataforma/exercicios">Exercícios</a>
        <a href="/plataforma/minha-assinatura">Minha Assinatura</a>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <div></div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                <UserRound />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                    {JSON.stringify(session)}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Duplicate
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Archive
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Move
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Share
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Add to favorites
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <Form action={logoutAction}>
                    <button className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                      Sair
                    </button>
                  </Form>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
