import {Component, ViewChild, ElementRef} from '@angular/core';


@Component({
   selector : 'oc-payments-header',
   templateUrl : './payments.header.component.html'
})

export class PaymentsHeaderComponent{
    // Header - Step 1 - Start
    selectedAccounts: any; // IOcSimpleOptionSource;
    searchAccountsResults: any[];
    searchPaymentCurrenyResults: any[];
    searchPaymentMethodResults: any[];
    searchPaymentTypeResults: any[];
    debitAccounts: {
      name: string, acctName: string, acctNumber: string,
      branchCode: string, branchName: string, acctCurrency: string, category: string, firstItem: true }[];
    paymentCurrency: { name: string, pymntCurrCode: string, pymntCurrDesc: string }[];
    paymentMethod: { name: string, pymntMethodCode: string, pymntMethodDesc: string }[];
    paymentType: { name: string, pymntTypeCode: string, pymntTypeDesc: string }[];
    @ViewChild('accountNumberRef', { read: true, static: false }) accountNumberRef: ElementRef;
    @ViewChild('paymentCurrencyRef', { read: true, static: false }) paymentCurrencyRef: ElementRef;
    @ViewChild('paymentTypeRef', {read: true, static: false}) paymentTypeRef: ElementRef;

    constructor(){
        this.loadAcountDetails();
        this.loadPaymentCurrency();
        this.loadPaymentMethod();
        this.loadPaymentType();
    }

    loadAcountDetails(): void{
        this.debitAccounts = [
            { name: 'AMERICAN CLUB (HKD)- 1000018046', acctName: "AMERICAN CLUB",
             acctNumber: '1000018046', branchCode: "712",  branchName: "America", acctCurrency: "HKD", category: '', firstItem: true },
            { name: 'AXIS CLUB (ARS)- 1000018046', acctName: "AXIS CLUB",
             acctNumber: '1000018046', branchCode: "032", branchName: "Argentia", acctCurrency: "ARS", category: '', firstItem: true }
        ];
    }

    loadPaymentCurrency(): void{
        this.paymentCurrency = [
            { name: 'IND - Indian Rupees', pymntCurrCode: "IND", pymntCurrDesc: "Indian Rupees" },
            { name: 'USD - US Dollars', pymntCurrCode: "USD", pymntCurrDesc: "US Dollars" }
        ];
    }

    loadPaymentMethod(): void{
        this.paymentMethod = [
            { name: 'BKT - Book Transfer', pymntMethodCode: "BKT", pymntMethodDesc: "Book Transfer" },
            { name: 'DFT - Domestic Fund Transfer', pymntMethodCode: "DFT", pymntMethodDesc: "Domestic Fund Transfer" }
        ];
    }

    loadPaymentType(): void{
        this.paymentType = [
            { name: 'CR - Credit', pymntTypeCode: "CR", pymntTypeDesc: "Credit" },
            { name: 'DR - Debit', pymntTypeCode: "DR", pymntTypeDesc: "Debit" }
        ];
    }

    // Event - Start
    // Account
    onSelectAccount(selectedOption: any = null): void {
        if (selectedOption && selectedOption.acctNumber) {
            this.accountNumberRef.nativeElement.querySelectorAll("input")[0].value = (selectedOption.acctNumber);
        }
    }
    searchAccounts(event: any) {
        this.searchAccountsResults = [];
        for (let i = 0; i < this.debitAccounts.length; i++) {
          const c = this.debitAccounts[i];
          if (c.name.toLowerCase().includes(event.query.toLowerCase())) {
            this.searchAccountsResults.push(c);
          }
        }
      }

    // PaymentCurrency
    searchPaymentCurrency(event: any) {
        this.searchPaymentCurrenyResults = [];
        for (let i = 0; i < this.paymentCurrency.length; i++) {
          const c = this.paymentCurrency[i];
          if (c.name.toLowerCase().includes(event.query.toLowerCase())) {
            this.searchPaymentCurrenyResults.push(c);
          }
        }
    }

    // PaymentMethod
    searchPaymentMethod(event: any) {
        this.searchPaymentMethodResults = [];
        for (let i = 0; i < this.paymentMethod.length; i++) {
          const c = this.paymentMethod[i];
          if (c.name.toLowerCase().includes(event.query.toLowerCase())) {
            this.searchPaymentMethodResults.push(c);
          }
        }
    }

    // PaymentType
    searchPaymentType(event: any) {
        this.searchPaymentTypeResults = [];
        for (let i = 0; i < this.paymentType.length; i++) {
          const c = this.paymentType[i];
          if (c.name.toLowerCase().includes(event.query.toLowerCase())) {
            this.searchPaymentTypeResults.push(c);
          }
        }
    }
    // Event - End

    // Header - Step 1 - End
}
