import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    ListItemText,
    MenuItem,
    Popover,
    Stack,
    Switch,
    TextField,
    useMediaQuery,
    useTheme
} from "@mui/material";
import QuirkCard from "components/QuirkCard";
import Quirk from "quirks/Quirk";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import { Clear, FilterList } from "@mui/icons-material";
import { ReactSetter } from "utils/ReactHookTypes";

type QuirkListProps = {
    quirks: Quirk[];
    inputText: string;
};

function removeDuplicates(arr: string[]) {
    return Array.from(new Set(arr));
}

const startingText = "The quick brown fox jumps over the lazy dog :) .";

export default function QuirkList(props: QuirkListProps): JSX.Element {
    const theme = useTheme();

    const [, setInputTextBoxFocused] = useState(false);
    const [inputText, setInputText] = useState<string>(startingText);
    const onInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const onInputTextBoxFocus = () => {
        setInputTextBoxFocused((prev) => {
            if (!prev) {
                setInputText("");
            }

            return true;
        });
    };

    const allTags = removeDuplicates(props.quirks.map((quirk) => quirk.tag));

    const localStorageStarredQuirks = localStorage.getItem("starredQuirks");
    const [starredQuirks, setStarredQuirks] = useState<string[]>(localStorageStarredQuirks ? JSON.parse(localStorageStarredQuirks) : []);
    const toggleStarredQuirk = (quirkName: string) => {
        setStarredQuirks((prev) => {
            const newList = prev.includes(quirkName) ? prev.filter((quirk) => quirk !== quirkName) : [...prev, quirkName];
            localStorage.setItem("starredQuirks", JSON.stringify(newList));
            return newList;
        });
    };

    const clearStarredQuirks = () => {
        setStarredQuirks([]);
        localStorage.removeItem("starredQuirks");
    };

    const [filteredTags, setFilteredTags] = useState(allTags);

    const [showOnlyStarred, setShowOnlyStarred] = useState(false);
    const toggleShowOnlyStarred = () => {
        setShowOnlyStarred((prev) => !prev);
    };

    const [quirkCardSpansRow, setQuirkCardSpansRow] = useState(false);
    const toggleQuirkCardSpansRow = () => {
        setQuirkCardSpansRow((prev) => !prev);
    };

    const quirks = useMemo(() =>
        props.quirks.filter((quirk) => filteredTags.includes(quirk.tag) && (!showOnlyStarred || starredQuirks.includes(quirk.name))),
    [filteredTags, props.quirks, showOnlyStarred, starredQuirks]);

    const quirkSpansRow = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Stack spacing={2}>
            <Stack direction={{ md: "row", xs: "column" }} spacing={{ md: 2, xs: 0 }} alignItems={"center"}>
                <FilterTagsPopover allTags={allTags} filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
                <FormControlLabel control={<Switch checked={showOnlyStarred} onChange={toggleShowOnlyStarred} />} label={"Show only starred"} />
                <FormControlLabel control={<Switch checked={quirkCardSpansRow} onChange={toggleQuirkCardSpansRow} />}
                                  label={"Quirk card spans row"} sx={{ display: quirkSpansRow ? "none" : undefined }}
                />
                <Button variant={"text"} color={"warning"} startIcon={<Clear />}
                        onClick={clearStarredQuirks}
                >{"Clear Starred Quirks"}</Button>
            </Stack>
            <Divider />
            <TextField label={"Input Text"} variant={"filled"}
                       value={inputText} onChange={onInputTextChange}
                       onFocus={onInputTextBoxFocus}
            />
            <Box display={"grid"} sx={{
                gridTemplateColumns: !quirkSpansRow && !quirkCardSpansRow ? "1fr 1fr 1fr" : undefined,
                gridGap: { md: theme.spacing(3), xs: theme.spacing(1) }
            }}
            >
                {quirks.map((quirk) => (
                    <QuirkCard key={quirk.name} quirk={quirk} inputText={inputText}
                               starred={starredQuirks.includes(quirk.name)}
                               toggleStarred={toggleStarredQuirk}
                    />
                ))}
            </Box>
        </Stack>
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
        <>
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
        </>
    );
}