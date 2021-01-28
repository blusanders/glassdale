console.log("Hello, I am the Main Module")
import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { NoteForm } from "./notes/NoteForm.js";

CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNoteButton();

//queryselectorall

