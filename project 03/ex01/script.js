
function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function 2: Check Access
function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// Test calculateGrade()
console.log("=== Grade Tests ===");
console.log(calculateGrade(90));      // A
console.log(calculateGrade(89));      // B
console.log(calculateGrade(0));       // F
console.log(calculateGrade(100));     // A
console.log(calculateGrade(59));      // F
console.log(calculateGrade(60));      // D
console.log(calculateGrade(-1));      // Invalid score
console.log(calculateGrade(101));     // Invalid score
console.log(calculateGrade("90"));    // Invalid score

// Test checkAccess()
console.log("=== Access Tests ===");
console.log(checkAccess(18, true));   // true
console.log(checkAccess(20, true));   // true
console.log(checkAccess(17, true));   // false
console.log(checkAccess(20, false));  // false
console.log(checkAccess(18, false));  // false
console.log(checkAccess("20", true)); // false
console.log(checkAccess(20, "yes"));  // false
