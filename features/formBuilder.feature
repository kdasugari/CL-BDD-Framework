@FormBuilder
Feature: Validation of FormBuilder and Controls

@Demo
Scenario: ManageForm_001: Verify create a new form in FormBuilder
        Given I navigate to the Continuity Logic
        When I submit username and password
        Then I validate "Continuity Logic" Home page is displayed
        And I click on "Manage Forms" on the left menu
        And I click on "Create New Form" button
        Then I enter ParentForm title and click on Save
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Input Box"
        And I drag and drop "Text Area"
        And I click on Update button
        And I click on "Advanced Tools" from the FormTools
        And I drag and drop "People Picker"
        And I select "People Picker" control with option "First Name" from "Selected Summary View Fields" field property
        And I select "People Picker" control with option "Last Name" from "Selected Summary View Fields" field property
        And I select "People Picker" control with option "First Name" from "Selected Form View Fields" field property
        And I select "People Picker" control with option "Last Name" from "Selected Form View Fields" field property
        And I click on Publish button
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        Then I validate the "Published" status for the newly created form in Manage Forms.
        And I click on " View Entries" button from the form search results
        Then I validate "Text box" control displayed in the form
        Then I validate "Text Area" control displayed in the form
        Then I validate "People Picker" control with option "First Name" displayed in the form
        Then I validate "People Picker" control with option "Last Name" displayed in the form

@Demo
    Scenario: ManageForm_002: Update the newly created Form in Form Builder by adding new tools and verify in data entry screen
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        And I click on " View / Modify Form" button from the form search results
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Radio"
        And I click on Update button
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        And I click on " View Entries" button from the form search results
        Then I validate "Radio Button" control displayed in the form

@Demo
    Scenario: ManageForm_003: Create Data entry for the Newly Created Form
        And I click on "Create New Item" button
        And I enter "AutomationTextBox" data in Text box field in "ParentForm"
        And I enter "AutomationTextArea" data in Text Area field in "ParentForm"
        And I click on "Update" button in "ParentForm" data entry page
        And I click on Back button in "ParentForm" data entry page
        # And I click on "Manage Forms" on the left menu
        # And I click on " View Entries" button from the form search results
        Then I validate "AutomationTextBox" data displayed in the DataTable 
        Then I validate "AutomationTextArea" data displayed in the DataTable 

@Demo
    Scenario: ManageForm_004: Update Data entry for the newly created form
        And I click on edit for update the data
        And I enter "AutomationTextBoxUpdate" data in Text box field in "ParentForm"
        And I enter "AutomationTextAreaUpdate" data in Text Area field in "ParentForm"
        And I click on "Update" button in "ParentForm" data entry page
        And I click on Back button in "ParentForm" data entry page
        Then I validate "AutomationTextBoxUpdate" data displayed in the DataTable 
        Then I validate "AutomationTextAreaUpdate" data displayed in the DataTable 

@Demo
    Scenario: ManageForm_005: Delete Data entry for the newly created form
        And I click on edit for update the data
        And I click on Delete button in "ParentForm" data entry page
        Then I validate "AutomationTextBoxUpdate" data should not be displayed in the DataTable 
        Then I validate "AutomationTextAreaUpdate" data should not be displayed in the DataTable 

@Demo
    Scenario: ManageForm_006: Delete the newly created form
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        And I click on " View / Modify Form" button from the form search results
        And I click on Delete button in the manage form
        Then I validate the newly created form should not be displayed

@Demo
    Scenario: ManageForm_007: Create a Form having all Controls and Child Form having all controls. Configure Maximum Properties Like Mandatory, Key Field, Hint/Help, Defaut Selected Field
        And I click on "Manage Forms" on the left menu
        And I click on "Create New Form" button
        And I enter ChildForm title and click on Save
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Input Box"
        And I select "Input Box" control with option "True" from "Required" field property
        And I drag and drop "Text Area"
        And I Enter "500" in "Max Characters" field property
        And I drag and drop "Drop Down"
        And I Enter "Dropdown List Child" in "Label" field property
        And I select "Drop Down" control with option "option2" from "Default Selected Option" field property
        And I drag and drop "Multi-Select"
        And I Enter "Multi-Select Child" in "Label" field property
        And I drag and drop "Multi-Select"
        And I Enter "Multi-Select Tag Child" in "Label" field property
        And I select "Multi-Select" control with option "Tags Mode (user can enter new values)" from "Multi-Select Type" field property
        And I drag and drop "Radio Button"
        And I Enter "Radio Child" in "Label" field property
        And I select "Radio Button" control with option "option1" from "Default Selected Option" field property
        And I drag and drop "Check Box"
        And I Enter "Check Box Child" in "Label" field property
        And I click on Update button
        And I click on "Advanced Tools" from the FormTools
        And I drag and drop "Email"
        And I Enter "Email Child" in "Label" field property
        And I drag and drop "Phone"
        And I Enter "Phone Child" in "Label" field property
        And I drag and drop "Date Picker"
        And I Enter "Date Picker US Child" in "Label" field property
        And I select checkbox "Enable Time Selection" field property
        And I drag and drop "Date Picker"
        And I Enter "Date Picker UK Child" in "Label" field property
        And I select checkbox "Enable Time Selection" field property
        And I select "Date Picker" control with option "U.K" from "Select Date Format" field property
        And I drag and drop "HTML Editor"
        And I Enter "HTML Editor Child" in "Label" field property
        And I select checkbox "In Form Builder" field property
        And I select checkbox "In data entry screens" field property
        And I drag and drop "Hyperlink"
        And I Enter "Hyperlink Child" in "Label" field property
        And I drag and drop "File Upload"
        And I Enter "File Upload Child" in "Label" field property
        And I drag and drop "Lookup Fields"
        And I Enter "Lookup Child" in "Label" field property
        And I Enter "2" in "Maximum number of selections allowed" field property
        And I select "Lookup Fields" control with option "Employees" from "Selected Data Source" field property
        And I drag and drop "People Picker"
        And I Enter "People Picker Child" in "Label" field property
        And I Enter "2" in "Maximum number of selections allowed" field property
        And I click on Publish button
        And I click on "Manage Forms" on the left menu
        And I click on "Create New Form" button
        And I enter ParentForm title and click on Save
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Input Box"
        And I select "Input Box" control with option "True" from "Required" field property
        And I drag and drop "Text Area"
        And I Enter "500" in "Max Characters" field property
        And I drag and drop "Drop Down"
        And I Enter "Testing", "Development" and "Support" in Options field property
        And I select "Drop Down" control with option "Development" from "Default Selected Option" field property
        And I drag and drop "Multi-Select"
        And I drag and drop "Multi-Select"
        And I Enter "Multi-Select Tag" in "Label" field property
        And I select "Multi-Select" control with option "Tags Mode (user can enter new values)" from "Multi-Select Type" field property
        And I drag and drop "Radio Button"
        And I Enter "Yes", "No" and "Maybe" in Options field property
        And I select "Radio Button" control with option "No" from "Default Selected Option" field property
        And I drag and drop "Check Box"
        And I Enter "QA1", "QA2" and "QA3" in Options field property
        And I click on Update button
        And I click on "Advanced Tools" from the FormTools
        And I drag and drop "Email"
        And I drag and drop "Phone"
        And I drag and drop "Date Picker"
        And I Enter "Date Picker US" in "Label" field property
        And I select checkbox "Enable Time Selection" field property
        And I drag and drop "Date Picker"
        And I Enter "Date Picker UK" in "Label" field property
        And I select checkbox "Enable Time Selection" field property
        And I select "Date Picker" control with option "U.K" from "Select Date Format" field property
        And I drag and drop "HTML Editor"
        And I select checkbox "In Form Builder" field property
        And I select checkbox "In data entry screens" field property
        And I drag and drop "Hyperlink"
        And I drag and drop "File Upload"
        And I drag and drop "Lookup Fields"
        And I Enter "2" in "Maximum number of selections allowed" field property
        And I select checkbox "Enable batch delete" field property for People Picker
        And I select "Lookup Fields" control with option "Employees" from "Selected Data Source" field property
        And I drag and drop "People Picker"
        And I Enter "2" in "Maximum number of selections allowed" field property
        And I select "People Picker" control with option "First Name" from "Selected Summary View Fields" field property         
        And I select "People Picker" control with option "Last Name" from "Selected Summary View Fields" field property
        And I select "People Picker" control with option "Work Email" from "Selected Summary View Fields" field property
        And I select "People Picker" control with option "First Name" from "Selected Form View Fields" field property
        And I select "People Picker" control with option "Last Name" from "Selected Form View Fields" field property
        And I select "People Picker" control with option "Work Email" from "Selected Form View Fields" field property
        And I select "People Picker" control with option "First Name" from "Selected Search View Fields" field property
        And I select "People Picker" control with option "Last Name" from "Selected Search View Fields" field property
        And I select "People Picker" control with option "Work Email" from "Selected Search View Fields" field property
        And I Enter "3" in "Maximum number of selections allowed" field property
        And I select checkbox "Enable Prioritization" field property for People Picker
        And I select checkbox "Enable batch delete" field property for People Picker
        And I click on Update button
        And I enter "Text box" control in "Key Fields" property
        And I select "Form" control with option "Text box" from "Title Form Field" field property 
        And I select checkbox "Enable inline editing" field property
        And I select checkbox "Enable batch editing" field property
        And I select checkbox "Enable horizontal scrolling" field property
        And I select checkbox "Enable batch reset" field property
        And I select checkbox "Enable batch delete" field property
        And I click on "Forms" from the FormTools
        And I select the Child form
        And I select checkbox "Enable child form inline editing" field property for Child Form
        And I select checkbox "Enable batch editing" field property for Child Form
        And I select checkbox "Enable horizontal scrolling for child form" field property for Child Form
        And I select checkbox "Enable batch reset" field property for Child Form
        And I select checkbox "Show export options?" field property for Child Form
        And I select checkbox "Enable batch delete" field property for Child Form
        And I select checkbox "Show Finish Button" field property for Child Form
        And I Enter "2" in "Maximum number of selections allowed" field property
        And I click on "Styles and Visibility" tab in Field Properties
        And I select checkbox "Hide Field In Grid/Summary?" field property
        And I click on Publish button
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        Then I validate the "Published" status for the newly created form in Manage Forms.
        And I click on " View Entries" button from the form search results
        Then I validate "Text box" control displayed in the form
        Then I validate "Text Area" control displayed in the form
        Then I validate "Dropdown List" control displayed in the form
        Then I validate "Multi-Select" control displayed in the form
        Then I validate "Multi-Select Tag" control displayed in the form
        Then I validate "Radio Button" control displayed in the form
        Then I validate "Checkbox List" control displayed in the form
        Then I validate "Email" control displayed in the form
        Then I validate "Phone" control displayed in the form
        Then I validate "Date Picker US" control displayed in the form
        Then I validate "Date Picker UK" control displayed in the form
        Then I validate "HTML Editor" control displayed in the form
        Then I validate "Hyperlink" control displayed in the form
        Then I validate "File Upload" control displayed in the form
        Then I validate "Lookup Field" control with option "First Name" displayed in the form
        Then I validate "People Picker" control with option "First Name" displayed in the form
        Then I validate "People Picker" control with option "Last Name" displayed in the form
        Then I validate "People Picker" control with option "Work Email" displayed in the form
        Then I validate Quick Create Item button displayed in the form

@Demo
    Scenario: ManageForm_008: Create/Update/Delete Data entry for a Form having all Controls and a Child Form having all controls
        And I click on "Manage Forms" on the left menu
        And I search Parent form in Manage Forms
        And I click on " View Entries" button from the form search results
        When I click on "Create New Item" button
        And I wait for the ChildForm loading
        And I click on "Update" button in "ParentForm" data entry page
        Then I validate the error message displayed for the "Text box" Validation on "ParentForm"
        And I enter "AutomationTextBox" data in Text box field in "ParentForm"
        Then I validate the error message not displayed for the "Text box" field
        And I enter "AutomationTextArea" data in Text Area field in "ParentForm"
        And I validate the characters left message for the Text Area field in "ParentForm"
        Then I validate Form full title appended with "AutomationTextBox" for ParentForm
        Then I validate "Testing", "Development" and "Support" Dropdown values displayed in "Dropdown List" in "ParentForm"
        Then I validate default selected value as "Development" in "Dropdown List" Dropdown
        Then I validate "Yes", "No" and "Maybe" radio buttons displayed in "Radio Button" in "ParentForm"
        Then I validate default "No" radio button selected in "Radio Button"
        And I select options "option1,option2" in "Multi-Select" in "ParentForm"
        And I enter option "test option" in "Multi-Select Tag"
        And I check option "QA1" in "Checkbox List"
        And I enter "invalidemail" data in "Email" field
        And I click on "Update" button in "ParentForm" data entry page
        Then I validate the error message displayed for the "Email" Validation on "ParentForm"
        And I enter "valid@email.com" data in "Email" field
        Then I validate the error message not displayed for the "Email" field
        And I enter "invalidPhoneNumber" data in "Phone" field
        And I click on "Update" button in "ParentForm" data entry page
        Then I validate the error message displayed for the "Phone" Validation on "ParentForm"
        And I enter "123456789" data in "Phone" field
        Then I validate the error message not displayed for the "Phone" field
        And I select date in "Date Picker US" field
        And I select date in "Date Picker UK" field
        Then I validate the US date format displayed in "Date Picker US" field
        Then I validate the UK date format displayed in "Date Picker UK" field
        And I click on "HTML Editor" and select Image icon
        And I navigate to Upload tab and upload file
        Then I validate Image displayed in the HTML Editor
        And I select "Hyperlink" icon
        And I enter "google.com" data in URL field
        Then I validate URL is displayed in the TextArea
        And I upload file in File Upload field
        Then I validate file displayed in the File Upload field
        And I select "Lookup Field" field
        Then I validate Maximum number of selections 2 allowed
        And I select the records from Choose Items
        Then I validate selected records displayed in the "Selected Items"
        Then I validate default Headers displayed in Selected Items
        And I click "OK" button in Selected Items
        Then I validate default Headers displayed for "Lookup Field" in the Form
        Then I validate selected records displayed for "Lookup Field" in the "ParentForm"
        Then I validate "Delete All Selected Items" button displayed
        And I select "People Picker" field
        Then I validate "First Name", "Last Name" and "Work Email" Headers displayed in Choose Items
        Then I validate Maximum number of selections 3 allowed
        And I select the records from Choose Items
        Then I validate selected records displayed in the "Selected Items"
        Then I validate "First Name", "Last Name" and "Work Email" Headers displayed in Selected Items
        And I click "OK" button in Selected Items
        Then I validate "First Name", "Last Name" and "Work Email" Headers displayed for "People Picker" in the Form
        Then I validate selected records displayed for "People Picker" in the "ParentForm"
        Then I validate "Delete All Selected Items" button displayed
        # And I click on "Update" button in "ParentForm" data entry page
    # Childform Data Entry
        When I click on "Create New Item" button on ChildForm
        And I click on "Update" button in "ChildForm" data entry page
        Then I validate the error message displayed for the "Text box" Validation on "ChildForm"
        And I enter "AutomationTextBox" data in Text box field in "ChildForm"
        Then I validate the error message not displayed for the "Text box" field 
        And I enter "AutomationTextArea" data in Text Area field in "ChildForm"
        And I validate the characters left message for the Text Area field in "ChildForm"
        Then I validate Form full title appended with "AutomationTextBox" for ChildForm
        Then I validate default Dropdown values displayed in "Dropdown List Child" in "ChildForm"
        Then I validate default selected value as "option2" in "Dropdown List Child" Dropdown
        Then I validate default radio buttons displayed in "Radio Child" in "ChildForm"
        Then I validate default "option1" radio button selected in "Radio Child"
        And I select options "option1,option2" in "Multi-Select Child" in "ChildForm"
        And I enter option "test option" in "Multi-Select Tag Child"
        And I check option "option1" in "Check Box Child"
        And I enter "invalidemail" data in "Email Child" field
        And I click on "Update" button in "ChildForm" data entry page
        Then I validate the error message displayed for the "Email Child" Validation on "ChildForm"
        And I enter "valid@email.com" data in "Email Child" field
        Then I validate the error message not displayed for the "Email Child" field
        And I select date in "Date Picker US Child" field
        Then I validate the US date format displayed in "Date Picker US Child" field
        And I select date in "Date Picker UK Child" field
        Then I validate the UK date format displayed in "Date Picker UK Child" field
        And I enter "invalidPhoneNumber" data in "Phone Child" field
        And I click on "Update" button in "ChildForm" data entry page
        Then I validate the error message displayed for the "Phone Child" Validation on "ChildForm"
        And I enter "123456789" data in "Phone Child" field
        Then I validate the error message not displayed for the "Phone Child" field
        And I select "Hyperlink Child" icon
        And I enter "google.com" data in URL field
        Then I validate URL is displayed in the TextArea
        And I select "Lookup Child" field on ChildForm
        Then I validate Maximum number of selections 2 allowed
        And I select the records from Choose Items
        Then I validate selected records displayed in the "Selected Items"
        Then I validate default Headers displayed in Selected Items
        And I click "OK" button in Selected Items
        Then I validate default Headers displayed for "Lookup Child" in the Form
        Then I validate selected records displayed for "Lookup Child" in the "ChildForm"
        Then I validate "Delete All Selected Items" button displayed
        And I click on Update button in ChildForm data entry page
        And I click on "Update" button in "ParentForm" data entry page