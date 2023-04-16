import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PetsIcon from "@mui/icons-material/Pets";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StrollerIcon from "@mui/icons-material/Stroller";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
export const services = [
  { service: "Bar", icon: <LocalBarIcon /> },
  { service: "Power backup", icon: <Battery2BarIcon /> },
  { service: "Pool", icon: <PoolIcon /> },
  { service: "Airport", icon: <AirlineSeatLegroomExtraIcon /> },
  { service: "Party", icon: <PeopleIcon /> },
  { service: "Nature", icon: <ParkIcon /> },
  { service: "Birthday", icon: <CakeIcon /> },
  { service: "Music", icon: <MusicNoteIcon /> },
  { service: "Pets", icon: <PetsIcon /> },
  { service: "Reservation", icon: <EventAvailableIcon /> },
  { service: "Kindergerechtt", icon: <StrollerIcon /> },
  { service: "Raucherbereich", icon: <SmokingRoomsIcon /> },
  { service: "Zum Mitnehmen", icon: <BusinessCenterIcon /> },
];
