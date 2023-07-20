Feature: Main page should have all the links functional


    Scenario: Constact US functionality works
        Given I am on webdriveruniversity webpage
        When I click "CONTACT US" header
        Then I should land on the correct URL "Contact-Us"

    Scenario Outline: Constact US functionality works with different headers
        Given I am on webdriveruniversity webpage
        When I click "<headerName>" header
        Then I should land on the correct URL "<substring>"

        Examples:
            | headerName                                    | substring                        |
            | CONTACT US                                    | Contact-Us                       |
            | LOGIN PORTAL                                  | Login-Portal                     |
            # | BUTTON CLICKS                                 | Click-Buttons                    |
            | TO DO LIST                                    | To-Do-List                       |
            | PAGE OBJECT MODEL                             | Page-Object-Model                |
            | ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR) | Accordion                        |
            | DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)      | Dropdown-Checkboxes-RadioButtons |
            # | AJAX LOADER                                   | Ajax-Loader                      |
            | ACTIONS                                       | Actions                          |
            | SCROLLING AROUND                              | Scrolling                        |
            | POPUP & ALERTS                                | Popup-Alerts                     |
            | IFRAME                                        | IFrame                           |
            # | HIDDEN ELEMENTS                               | Hidden-Elements                  |
            | DATA, TABLES & BUTTON STATES                  | Data-Table                       |
            | AUTOCOMPLETE TEXTFIELD                        | Autocomplete-TextField           |
            | FILE UPLOAD                                   | File-Upload                      |
            | DATEPICKER                                    | Datepicker                       |