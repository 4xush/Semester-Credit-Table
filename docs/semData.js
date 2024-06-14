
const data = {
    ECE: {
        1: [
            { id: 1, subject: 'MA101', credit: 8 },  // Mathematics I
            { id: 2, subject: 'CS101', credit: 6 },  // Computer Programming
            { id: 3, subject: 'CS110', credit: 3 },  // Computer Programming Lab  
            { id: 4, subject: 'EC101', credit: 8 },  // Digital Design
            { id: 5, subject: 'EC110', credit: 3 },  // Digital Design Lab  
            { id: 6, subject: 'EC102', credit: 8 },  // Electrical Circuit Analysis
            { id: 7, subject: 'HS101', credit: 4 },  // English
            { id: 8, subject: 'GE101', credit: 6 },  // Induction Program  
          ],          
        2: [
            { id: 1, subject: 'MA102', credit: 8 },
            { id: 2, subject: 'CS103', credit: 8 },
            { id: 3, subject: 'CS111', credit: 3 },
            { id: 4, subject: 'CS104', credit: 8 },
            { id: 5, subject: 'EC103', credit: 8 },
            { id: 6, subject: 'EC111', credit: 3 },
            { id: 7, subject: 'HSXXX', credit: 6 }
        ],        
        3: [
            { id: 1, subject: 'MA203', credit: 6 },
            { id: 2, subject: 'EC201', credit: 6 },
            { id: 3, subject: 'EC260', credit: 6 },
            { id: 4, subject: 'EC241', credit: 6 },
            { id: 5, subject: 'CS202', credit: 7 },
            { id: 6, subject: 'SC201', credit: 6 },
            { id: 7, subject: 'HSXXX', credit: 6 },
          ],          
        4: [
            { id: 1, subject: 'EC-243', credit: 6 },
            { id: 2, subject: 'EC-251', credit: 8 },
            { id: 3, subject: 'MA-204', credit: 6 },
            { id: 4, subject: 'SC-202', credit: 6 },
            { id: 5, subject: 'HS-XXX', credit: 6 },
            { id: 6, subject: 'CS-204', credit: 6 },
            { id: 7, subject: 'EC-252', credit: 3 },
            { id: 8, subject: 'EC-244', credit: 3 }
        ],
        5: [
            { id: 1, subject: 'EC351', credit: 8 },  // Digital Communication
            { id: 2, subject: 'EC352', credit: 3 },  // Digital Communication Lab
            { id: 3, subject: 'EC301', credit: 6 },  // Analog Integrated Circuits
            { id: 4, subject: 'EC302', credit: 3 },  // Analog Integrated Circuit Lab
            { id: 5, subject: 'EC370', credit: 8 },  // Electromagnetics
            { id: 6, subject: 'EC380', credit: 8 },  // Control Systems
            { id: 7, subject: 'SC301', credit: 6 },  // Biology
            { id: 8, subject: 'HSXXX', credit: 6 },  // HSS Elective
          ],          
          6: [
            { id: 1, subject: 'EC353', credit: 6 },  // Information Theory and Coding
            { id: 2, subject: 'EC361', credit: 6 },  // VLSI Design
            { id: 3, subject: 'EC362', credit: 3 },  // VLSI Design Lab
            { id: 4, subject: 'EC371', credit: 6 },  // Microwave Engineering
            { id: 5, subject: 'EC372', credit: 3 },  // Microwave Engineering Lab
            { id: 6, subject: 'EC381', credit: 6 },  // Embedded Systems
            { id: 7, subject: 'EC382', credit: 3 },  // Embedded Systems Lab
            { id: 8, subject: 'SC302', credit: 6 },  // Physics II
            { id: 9, subject: 'HSXXX', credit: 6 },  // HSS (Elective)
            { id: 10, subject: 'EC300', credit: 6 }, // Project (optional)
          ],
          
          7: [
            { id: 1, subject: 'EC456', credit: 6 },  // Communication Network
            { id: 2, subject: 'ECXXX', credit: 6 },  // Elective I
            { id: 3, subject: 'ECXXX', credit: 6 },  // Elective II (assuming another ECE Elective)
            { id: 4, subject: 'EC400', credit: 12 }, // Project I
            { id: 5, subject: 'OPXXX', credit: 6 }, // Open Elective
            { id: 6, subject: 'HSXXX', credit: 6 },  // HSS Elective
          ],
          
        8: [ /* Subjects and credits for ECE Semester 8 */ ]
    },
    CSE: {
        1: [
            { id: 1, subject: 'MA101', credit: 8 },
            { id: 2, subject: 'CS101', credit: 6 },
            { id: 3, subject: 'CS110', credit: 3 },
            { id: 4, subject: 'EC101', credit: 8 },
            { id: 5, subject: 'EC110', credit: 3 },
            { id: 6, subject: 'EC102', credit: 8 },
            { id: 7, subject: 'HS101', credit: 4 },
            { id: 8, subject: 'GE101', credit: 6 }
        ],
        2: [
            { id: 1, subject: 'MA102', credit: 8 },
            { id: 2, subject: 'CS103', credit: 8 },
            { id: 3, subject: 'CS111', credit: 3 },
            { id: 4, subject: 'CS104', credit: 8 },
            { id: 5, subject: 'EC103', credit: 8 },
            { id: 6, subject: 'EC111', credit: 3 },
            { id: 7, subject: 'HSXXX', credit: 6 }
        ],
        3: [
            { id: 1, subject: 'MA203', credit: 6 },
            { id: 2, subject: 'MA205', credit: 6 },
            { id: 3, subject: 'CS201', credit: 6 },
            { id: 4, subject: 'CS210', credit: 3 },
            { id: 5, subject: 'CS202', credit: 7 },
            { id: 6, subject: 'SC201', credit: 6 },
            { id: 7, subject: 'HSXXX', credit: 6 }
          ],
        4: [
            { id: 1, subject: 'CS-205', credit: 6 },
            { id: 2, subject: 'CS-231', credit: 6 },
            { id: 3, subject: 'CS-232', credit: 3 },
            { id: 4, subject: 'CS-235', credit: 6 },
            { id: 5, subject: 'CS-236', credit: 3 },
            { id: 6, subject: 'CS-240', credit: 6 },
            { id: 7, subject: 'CS-241', credit: 4 },
            { id: 8, subject: 'SC-202', credit: 6 },
            { id: 9, subject: 'HSS-XXX', credit: 6 }
        ],
        5: [
            { id: 1, subject: 'CS301', credit: 6 },
            { id: 2, subject: 'CS352', credit: 6 },
            { id: 3, subject: 'CS353', credit: 4 },
            { id: 4, subject: 'CS306', credit: 6 },
            { id: 5, subject: 'CS360', credit: 3 },
            { id: 6, subject: 'CS351', credit: 7 },
            { id: 7, subject: 'SC301', credit: 6 },
            { id: 8, subject: 'HSXXX', credit: 6 }
          ],          
          6: [
            { id: 1, subject: 'CS330', credit: 6 },
            { id: 2, subject: 'CS331', credit: 3 },
            { id: 3, subject: 'CS320', credit: 6 },
            { id: 4, subject: 'CS321', credit: 3 },
            { id: 5, subject: 'CS361', credit: 6 },
            { id: 6, subject: 'SC302', credit: 6 },
            { id: 7, subject: 'CS300', credit: 6 },  
            { id: 8, subject: 'HSXXX', credit: 6 }
          ],          
          7: [
            { id: 1, subject: 'CS401', credit: 6 },  // Data Analytics
            { id: 2, subject: 'CS4XX', credit: 6 },  // Elective I
            { id: 3, subject: 'CS4XX', credit: 6 },  // Elective II
            { id: 4, subject: 'CS4XX', credit: 6 },  // Elective III
            { id: 5, subject: 'HSXXX', credit: 6 },  // HSS Elective
          ],
          
        // 8: [ /* Subjects and credits for CSE Semester 8 */ ] no 8 sem
    }
};