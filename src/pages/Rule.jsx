import NavBar from "../component/NavBar.jsx";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { blue } from "@mui/material/colors";
import ChildCareIcon from "@mui/icons-material/ChildCare.js";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import PersonIcon from "@mui/icons-material/Person.js";
import {
  TbSquareLetterA,
  TbSquareLetterH,
  TbSquareLetterS,
  TbSquareLetterT,
} from "react-icons/all.js";

function Rule() {
  return (
    <div className="rule">
      <NavBar />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Wordle Game
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How To Play
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Wordle is a word-guessing game where the computer selects a
                  word at random, and the player has several chances to guess
                  the word.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://helios-i.mashable.com/imagery/articles/075GWvqaGe8ucmSTe1ozUtn/hero-image.fill.size_1200x1200.v1643665576.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  For different levels of difficulty, the computer will select a
                  word with a different number of letters, and the player has a
                  different number of chances to guess the word.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <ChildCareIcon />
                    </Avatar>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Normal Level.
                      </strong>{" "}
                      The computer selects
                      <strong> six-letter </strong> word at random, and the
                      player has
                      <strong> six </strong> chances to guess the word.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Hard Level.
                      </strong>{" "}
                      The computer selects a<strong> seven-letter </strong> word
                      at random, and the player has
                      <strong> five </strong> chances to guess the word.
                    </span>
                  </li>
                </ul>
                <br></br>
                <p>
                  After each guess, the computer indicates how many letters are
                  correct by using different color notations, but not which
                  ones. The player wins the game by guessing the word correctly
                  within the limited attempts, but loses the game if they are
                  unable to guess the word within the limited attempts.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <TbSquareLetterT
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                      color="DarkSeaGreen"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Green Notation.
                      </strong>{" "}
                      T is in the word and in the correct spot.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TbSquareLetterH
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                      color="GoldenRod"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Yellow Notation.
                      </strong>{" "}
                      H is in the word but in the wrong spot.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TbSquareLetterS
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                      color="DarkGray"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Grey Notation.
                      </strong>{" "}
                      S and O are not in the word in any spot.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Wordle is a fun and challenging game that requires players to
                  use deductive reasoning, word knowledge, and pattern
                  recognition skills to successfully guess the secret word. It
                  has gained widespread popularity as a simple but addictive
                  game, hope you enjoy it.
                  <br />
                  <br />
                  <strong> Good Luck & Have Fun! </strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rule;
