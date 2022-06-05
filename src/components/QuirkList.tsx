import { Button, Checkbox, Grid, ListItemText, MenuItem, Popover } from "@mui/material";
import QuirkCard from "components/QuirkCard";
import Quirk from "quirks/Quirk";
import { MouseEvent, useState } from "react";
import { FilterList } from "@mui/icons-material";
import { ReactSetter } from "utils/ReactHookTypes";

type QuirkListProps = {
    quirks: Quirk[];
    inputText: string;
};

function removeDuplicates(arr: string[]) {
    return Array.from(new Set(arr));
}

export default function QuirkList(props: QuirkListProps): JSX.Element {
    const allTags = removeDuplicates(props.quirks.map((quirk) => quirk.tag));
    const [filteredTags, setFilteredTags] = useState(allTags);

    const quirks = props.quirks.filter((quirk) => filteredTags.includes(quirk.tag));

    return (
        <>
            <FilterTagsPopover allTags={allTags} filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {quirks.map((quirk) => <QuirkCard key={quirk.name} quirk={quirk} inputText={props.inputText} />)}
            </Grid>
        </>
    );
}

type FilterTagsPopoverProps = {
    allTags: string[];
    filteredTags: string[];
    setFilteredTags: ReactSetter<string[]>;

};

export function FilterTagsPopover(props: FilterTagsPopoverProps): JSX.Element {
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
            <Button aria-describedby={id} variant={"text"} onClick={handleClick}
                    startIcon={<FilterList />}
            >
                {"Filter by Tag"}
            </Button>
            <Popover id={id} open={open} onClose={handleClose}
                     anchorEl={anchorEl} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                {props.allTags.map((key) => {
                    const enabled = props.filteredTags.includes(key);

                    const addTagToFilteredTags = () => {
                        props.setFilteredTags((prevState: string[]) => [...prevState, key]);
                    };

                    const removeTagFromFilteredTags = () => {
                        props.setFilteredTags((prevState: string[]) => prevState.filter((tag) => tag !== key));
                    };

                    const toggleTagInFilteredTags = () => {
                        if (enabled) {
                            removeTagFromFilteredTags();
                        } else {
                            addTagToFilteredTags();
                        }
                    };

                    return (
                        <MenuItem key={key} onClick={toggleTagInFilteredTags}>
                            <Checkbox checked={props.filteredTags.includes(key)} />
                            <ListItemText primary={key} />
                        </MenuItem>
                    );
                })}
            </Popover>
        </div>
    );
}