import { atom } from "recoil";

import tiger from "../assets/tiger.png";
import peter from "../assets/peter.png";

import beam from "../assets/beam.png";
import kate from "../assets/kate.png";

import honey from "../assets/honey.png";
import joan from "../assets/joan.png";

import newKid from "../assets/new.png";
import karl from "../assets/karl.png";

import homicide from "../assets/homicide.png";
import ella from "../assets/ella.png";

import everton from "../assets/everton.png";
import kole from "../assets/kole.png";

const arts = [
  {
    id: '1',
    artImg: tiger,
    name: "Tiger swag",
    no: "#127",
    ownerPic: peter,
    ownerName: "peter paul",
    bid: "1 ETH",
  },

  {
    id: '2',
    artImg: beam,
    name: "Perfecto beam",
    no: "#099",
    ownerPic: kate,
    ownerName: "Kate Paul",
    bid: "1.5 ETH",
  },

  {
    id: '3',
    artImg: honey,
    name: "Perfecto beam",
    no: "#09",
    ownerPic: joan,
    ownerName: "Joan kid",
    bid: "5 ETH",
  },
  {
    id: '4',
    artImg: newKid,
    name: "New orleans kid",
    no: "#700",
    ownerPic: karl,
    ownerName: "Karl max",
    bid: "5 ETH",
  },
  {
    id: '5',
    artImg: homicide,
    name: "Homicide pig",
    no: "#59",
    ownerPic: ella,
    ownerName: "Ella sun",
    bid: "2 ETH",
  },

  {
    id: '6',
    artImg: everton,
    name: "Everton fox",
    no: "#800",
    ownerPic: kole,
    ownerName: "kole paul",
    bid: "1 ETH",
  },
  {
    id: '7',
    artImg: honey,
    name: "Perfecto beam",
    no: "#09",
    ownerPic: joan,
    ownerName: "Joan kid",
    bid: "5 ETH",
  },

  {
    id: '8',
    artImg: newKid,
    name: "New orleans kid",
    no: "#700",
    ownerPic: karl,
    ownerName: "Karl max",
    bid: "5 ETH",
  }
]


export const artState = atom({
  key: 'Art',
  default: arts

})

export const artIdState = atom({
  key: 'ArtId',
  default: ''
})