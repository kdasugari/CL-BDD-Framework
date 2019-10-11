@Demo
Feature: Validation of FormBuilder and Controls

@Sanity
    Scenario: ManageForm_001: Verify create a new form in FormBuilder
        Given I navigate to the Continuity Logic
        When I submit username and password
        Then I validate "Continuity Logic" Home page is displayed
        And I click on "Manage Forms" on the left menu
        And I click on "Create New Form" button
        And I enter form title and click on Save
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Input Box"
        And I drag and drop "Text Area"
        And I click on "Advanced Tools" from the FormTools
        And I drag and drop "People Picker"
        And I select "First Name" from "Selected Summary View Fields" field property
        And I select "Last Name" from "Selected Summary View Fields" field property
        And I select "First Name" from "Selected Form View Fields" field property
        And I select "Last Name" from "Selected Form View Fields" field property
        And I click on Publish button
        And I click on "Manage Forms" on the left menu
        And I search the form in Manage Forms
        Then I validate the "Published" status for the newly created form in Manage Forms.
        And I click on " View Entries" button from the form search results
        Then I validate "Text box" control displayed in the form
        Then I validate "Text Area" control displayed in the form
        Then I validate "People Picker" control with option "First Name" displayed in the form
        Then I validate "People Picker" control with option "Last Name" displayed in the form

@Sanity
    Scenario: ManageForm_002: Update the newly created Form in Form Builder by adding few tools and verify in data entry screen
        And I click on "Manage Forms" on the left menu
        And I click on " View / Modify Form" button from the form search results
        And I click on "Basic Tools" from the FormTools
        And I drag and drop "Radio"
        And I click on Update button
        And I click on "Manage Forms" on the left menu
        And I click on " View Entries" button from the form search results
        Then I validate "Radio Button" control displayed in the form

@Sanity
    Scenario: ManageForm_003: Create Data entry for the Newly Created Form
        And I click on "Create New Item" button
        And I enter "AutomationTextBox" data in Text box field
        And I enter "AutomationTextArea" data in Text Area field
        And I click on "Update" button in data entry page
        Then I validate "AutomationTextBox" data displayed in the DataTable 
        Then I validate "AutomationTextArea" data displayed in the DataTable 
