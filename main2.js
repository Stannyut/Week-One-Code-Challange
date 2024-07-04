function calculateNetSalary(basicSalary, benefits) {
    // PAYE Tax Rates
    const PAYE_RATES = [
      { upTo: 24000, rate: 0.1 },
      { upTo: 32333, rate: 0.25 },
      { above: 32333, rate: 0.3 }
    ];
  
    // NHIF Contributions (based on salary range)
    const NHIF_RATES = [
      { upTo: 5999, deduction: 150 },
      { upTo: 7999, deduction: 300 },
      { upTo: 11999, deduction: 400 },
      { upTo: 14999, deduction: 500 },
      { upTo: 19999, deduction: 600 },
      { upTo: 24999, deduction: 750 },
      { upTo: 29999, deduction: 850 },
      { upTo: 34999, deduction: 900 },
      { upTo: 39999, deduction: 950 },
      { upTo: 44999, deduction: 1000 },
      { upTo: 49999, deduction: 1100 },
      { upTo: 59999, deduction: 1200 },
      { upTo: 69999, deduction: 1300 },
      { upTo: 79999, deduction: 1400 },
      { upTo: 89999, deduction: 1500 },
      { upTo: 99999, deduction: 1600 },
      { above: 99999, deduction: 1700 }
    ];
  
    // NSSF Contribution Rate
    const NSSF_RATE = 0.06;
  
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (Tax)
    let payeTax = 0;
    for (let rate of PAYE_RATES) {
      if (grossSalary <= rate.upTo || !rate.upTo) {
        payeTax += grossSalary * rate.rate;
        break;
      } else {
        payeTax += rate.upTo * rate.rate;
        grossSalary -= rate.upTo;
      }
    }
  
    // Calculate NHIF Deduction
    let nhifDeduction = 0;
    for (let rate of NHIF_RATES) {
      if (grossSalary <= rate.upTo || !rate.upTo) {
        nhifDeduction = rate.deduction;
        break;
      }
    }
  
    // Calculate NSSF Deduction
    const nssfDeduction = basicSalary * NSSF_RATE;
  
    // Calculate Net Salary
    const netSalary = grossSalary - (payeTax + nhifDeduction + nssfDeduction);
  
    // Return results
    return {
      grossSalary,
      payeTax,
      nhifDeduction,
      nssfDeduction,
      netSalary
    };
  }
  
  // Example usage
  const basicSalary = parseFloat(prompt("Enter your basic salary:"));
  const benefits = parseFloat(prompt("Enter your benefits:"));
  
  const result = calculateNetSalary(basicSalary, benefits);
  
  console.log(`Gross Salary: ${result.grossSalary}`);
  console.log(`PAYE (Tax): ${result.payeTax}`);
  console.log(`NHIF Deduction: ${result.nhifDeduction}`);
  console.log(`NSSF Deduction: ${result.nssfDeduction}`);
  console.log(`Net Salary: ${result.netSalary}`);
  
  alert(`Gross Salary: ${result.grossSalary}\nPAYE (Tax): ${result.payeTax}\nNHIF Deduction: ${result.nhifDeduction}\nNSSF Deduction: ${result.nssfDeduction}\nNet Salary: ${result.netSalary}`);
  
