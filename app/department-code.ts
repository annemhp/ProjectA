export class DepartmentCode {
    //"Education","R&B","Irrigation" ,"Health", "Revenue", "Municipality" ,
    //        "Panchayat Raj","Govt Schemes", "Others"
    departments = [
        { id: 'Education', label: 'Education' },
        { id: 'R&B', label: 'R&B' },
        { id: 'Irrigation', label: 'Irrigation' },
        { id: 'Health', label: 'Health' },
        { id: 'Revenue', label: 'Revenue' },
        { id: 'Municipality', label: 'Municipality' },
        { id: 'Panchayat Raj', label: 'Panchayat Raj' },
        { id: 'Others', label: 'Others' },
        { id: 'Govt Schemes', label: 'Govt Schemes' }
    ];
    departmentsMap = {
        'Education': 'Education',
        'R&B': 'R&B',
        'Irrigation': 'Irrigation',
        'Health': 'Health',
         'Revenue': 'Revenue',
        'Municipality': 'Municipality',
        'Panchayat Raj': 'Panchayat Raj',
        'Others': 'Others',
        'Govt Schemes': 'Govt Schemes'
    }
}