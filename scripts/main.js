console.log("Hello, I am the Main Module")

import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { ShowNotesButton } from "./notes/ShowNotesButton.js";
import { ShowWitnessesButton } from "./witnesses/showWitnessesButton.js";
import { NoteForm } from "./notes/NoteForm.js";
import "./alibis/AlibiList.js";
import { ShowCriminalsButton } from "./criminals/showCriminalsButton.js";
import { ShowFacilitiesButton } from "./facility/ShowFacilitiesButton.js";

CriminalList();
ShowWitnessesButton();
ShowFacilitiesButton();
// ShowCriminalsButton();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNotesButton();

