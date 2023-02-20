import {
  Button,
  Checkbox,
  ListItemText,
  MenuItem,
  Popover,
} from "@mui/material";
import type Quirk from "quirks/Quirk";
import type { ModList, QuirkMod } from "quirks/Quirk";
import type { MouseEvent } from "react";
import { useState } from "react";

type ReactSetter<T> = (newState: T | ((prevState: T) => T)) => void;

type QuirkModListPopoverProps = {
  quirk: Quirk;
  mods: ModList;
  setMods: ReactSetter<ModList>;
};

export default function QuirkModListPopover({
  quirk,
  mods,
  setMods,
}: QuirkModListPopoverProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant={"outlined"} onClick={handleClick}>
        {"Edit Modifiers"}
      </Button>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {Object.keys(mods).map((key) => {
          const quirkMod = quirk.mods.find((mod) => mod.id === key) as QuirkMod;

          return (
            <MenuItem
              key={key}
              onClick={() =>
                setMods((prevState: ModList) => ({
                  ...prevState,
                  [key]: !prevState[key],
                }))
              }
            >
              <Checkbox checked={mods[key]} />
              <ListItemText
                primary={quirkMod.title}
                secondary={quirkMod.description}
              />
            </MenuItem>
          );
        })}
      </Popover>
    </div>
  );
}
