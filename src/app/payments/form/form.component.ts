import { Component, ElementRef, ViewChild } from '@angular/core';
//import { CancelPaymentModalComponent } from './cancel-modal.component';



@Component({
  selector: 'oc-form-payments',
  templateUrl: './form.component.html',
})
export class PaymentsFormComponent {  


  iconButtonModel: any;
  accountsLinkedClient: boolean = false;
  breadcrumbs: any[];
  OcWizardTypeEnums: any;
  paymentDetails: any[];
  chkBoxModel: any;
  wizardType: any;
  chkListModel: any[];
  //iconClass: any;
  horizontalOrientation: any;  
  beneficiaryAccounts: { name: string; category: string; firstItem: boolean; }[];
  currentStep: number;
  fixedFormFooter: boolean = false;

  // Payment Details
  currencies: any[];
  selectedCurrency: any;
  paymentAmount: any;

  // Additional Info
  panelLocale: any;
  beneficiaryAddress: string;
  beneficiaryBankAddress: string;
  beneficiaryOtherId: string;
  beneficiaryReference: string;
  beneficiaryAdviceTypes: any[];
  beneficiaryTypes: any[];
  beneficiaryRoutingMethods: any[];
  selectedBeneficiaryType: any;
  selectedRoutingMethod: any;
  beneficiaryBankName: { name: string; category: string; firstItem: boolean; }[];
  beneficiaryBankRoutingCode: { name: string; category: string; firstItem: boolean; }[];
  beneficiaryBanks: string[];
  selectedBeneficiaryBank: string[] = [];
  beneficiaryBankSearchResults: string[];
  beneficiaryBankRoutingCodes: string[];
  selectedBeneficiaryBankRoutingCode: string[] = [];
  beneficiaryBankRoutingCodeSearchResults: string[];

  // Review and Submit Info
  reviewInfoWizard: any[];
  reviewInfoWizardOrientation: any;// = OcNavWizardOrientationEnums.Vertical;
  textboxOptions: any;

  constructor() {
    this.textboxOptions = {
      numericOnly: true,
      exponential: false,
    };
    this.loadPageData();

  }

  loadPageData () {
    this.iconButtonModel = 1;

    this.breadcrumbs = [
      {'label': 'Home'},
      {'label': 'Payments'},
      {'label': 'Initiate Payments'}] ;
    //this.OcWizardTypeEnums = OcWizardTypeEnums.Icon;
    this.paymentDetails = [
        {'label': 'Payment Details'},
        {'label': 'Additional Information'},
        {'label': 'Review and Submit'}
      ];
    this.currentStep = 1;
    //this.iconClass = OcIconClassEnums.BlueCancel;
    this.loadPaymentDetails();
    this.loadAdditionalInfo();
    this.loadReviewInfo();
  }

  proceedToNext() {
    this.currentStep = this.currentStep < 3 ? this.currentStep + 1 : 1;
     /* if (this.currentStep > 1) {
      this.fixedFormFooter = false;
    } else {
      this.fixedFormFooter = false;
    } */
  }

  loadPaymentDetails() {  
    //this.horizontalOrientation = OcCheckboxListOrientationEnums.Horizontal;
    this.beneficiaryAccounts = [
      { name: 'Beneficiary Account Name - 12121212', category: 'MOST FREQUENT', firstItem: true },
      { name: 'Beneficiary Account Name - 13131313', category: 'MOST FREQUENT', firstItem: false},
      { name: 'Beneficiary Account Name - 14141414', category: 'MOST FREQUENT', firstItem: false },
      { name: 'Beneficiary Account Name - 24242424', category: 'RECENTS', firstItem: true },
      { name: 'Beneficiary Account Name - 23232323', category: 'RECENTS', firstItem: false },
      { name: 'Beneficiary Account Name - 22222222', category: 'RECENTS', firstItem: false },
      { name: 'Beneficiary Account Name - 21212121', category: 'RECENTS', firstItem: false },
      { name: 'Beneficiary Account Name - 333121212', category: '', firstItem: true },
      { name: 'Beneficiary Account Name - 333131313', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333141414', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333151515', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333161616', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333171717', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333181818', category: '', firstItem: false },
      { name: 'Beneficiary Account Name - 333191919', category: '', firstItem: false }
    ];
    this.chkBoxModel = { label: 'Use Payment Template', checked: false };
    this.chkListModel = [
      {name: 'cb1', label: 'Checkbox 1', value: true},
      {name: 'cb2', label: 'Checkbox 2', value: true},
      {name: 'cb3', label: 'Checkbox 3', value: false},
      {name: 'cb4', label: 'Checkbox 4', value: false},
    ];
    this.currencies = [
      {id: 1, value: 'usd', label: 'USD'},
      {id: 2, value: 'cad', label: 'CAD'},
      {id: 3, value: 'aud', label: 'AUD'},
    ];
    this.selectedCurrency = this.currencies[0];
    this.paymentAmount = 123000;
  }

  loadAdditionalInfo() {
    this.panelLocale = {
      'EXPAND_ALL_TEXT': '',
      'COLLAPSE_ALL_TEXT': ''
    };
    this.beneficiaryAddress = '123 Unit, 192 Street, New York, NY 10002';
    this.beneficiaryBankAddress = '83 Street, San Francisco, CA';
    this.beneficiaryOtherId = '';
    this.beneficiaryReference = '1239VAS9128';

    this.beneficiaryAdviceTypes = [
      {id: 1, value: 'type1', label: 'Type 1'},
      {id: 2, value: 'type2', label: 'Type 2'},
      {id: 3, value: 'type3', label: 'Type 3'},
    ];
    this.beneficiaryTypes = [
      {id: 1, value: 'bank', label: 'A Bank'},
      {id: 2, value: 'type2', label: 'Type 2'},
      {id: 3, value: 'type3', label: 'Type 3'},
    ];
    this.selectedBeneficiaryType = this.beneficiaryTypes[0];
    this.beneficiaryRoutingMethods = [
      {id: 1, value: 'wire', label: 'Wire'},
      {id: 2, value: 'ach', label: 'ACH'},
    ];
    this.selectedRoutingMethod = this.beneficiaryRoutingMethods[0];

    this.selectedBeneficiaryBank = ['Bank of America'];
    this.beneficiaryBanks = ['Bank of America',
  'First Midwest Bank', 'First Niagra Bank', 'Great Western Bank'];

    this.selectedBeneficiaryBankRoutingCode = ['198WSF193'];
    this.beneficiaryBankRoutingCodes = [
      '198WSF193',
      '111ALB123',
      '222ARZ234',
      '333ARK345',
      '444CAL456',
    ];
  }

  loadReviewInfo() {
   /* this.reviewInfoWizard = [
      { 'iconClass': OcIconClassEnums.None, data: { label: 'CUT OFF', wrapperClass: 'cut-off-data' , status: '01 JAN 2018; 00:00'}},
      {'iconClass': OcIconClassEnums.StatusIndicator, data: { label: 'User Name', status: 'Submit', statusClass: 'occ-blue'}},
      {'iconClass': OcIconClassEnums.StatusIndicatorYellow, data: { label: 'User Name', status: 'Verify', statusClass: 'occ-yellow'}},
      {'iconClass': OcIconClassEnums.StatusIndicatorPurple, data: { label: 'User Name', status: 'Authorize', statusClass: 'occ-purple'}},
      {'iconClass': OcIconClassEnums.StatusIndicatorGreen, data: { label: 'User Name', status: 'Release', statusClass: 'occ-green'}},
    ];*/
  }

  searchBeneficiaryBanks(event: any) {
    this.beneficiaryBankSearchResults = this.beneficiaryBanks.filter((v: string) =>
    v.toLowerCase().includes(event.query.toLowerCase()));
  }

  searchBeneficiaryBankRoutingCodes(event: any) {
    this.beneficiaryBankRoutingCodeSearchResults = this.beneficiaryBankRoutingCodes.filter((v: string) =>
      v.toLowerCase().includes(event.query.toLowerCase()));
  }

  

}
