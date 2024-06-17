import { Injectable } from '@angular/core';

interface Course {
  name: string;
  subjects: number;
  experts: number;
}
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private _courses: Course[] = [];
  private exams: any[];

  getCourses(): any[] {
    this._courses = [
      {
        "name": "Algebra",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Applied Mathematics",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "Art",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "Art History",
        "subjects": 8,
        "experts": 3
      },
      {
        "name": "Agriculture",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Astronomy",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Biology",
        "subjects": 13,
        "experts": 6
      },
      {
        "name": "Biology & Life Sciences",
        "subjects": 18,
        "experts": 8
      },
      {
        "name": "Business Management",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Calculus",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "Chemical Engineering",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Chemistry",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Civil Engineering",
        "subjects": 16,
        "experts": 7
      },
      {
        "name": "Classical Music",
        "subjects": 9,
        "experts": 4
      },
      {
        "name": "Communication Studies",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Computer Science",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "Culture",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "Data Analytics",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Descriptive Analytics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Descriptive Statistics",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Economics",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Education",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "English",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Ethical Issues",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "Ethics",
        "subjects": 9,
        "experts": 4
      },
      {
        "name": "Elementary Statistics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Finance, Accounting and Banking",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "Fundamental Physics",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Geography",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Geology",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Healthcare and Nursing",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "History",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "History of Literature",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Human Resources Management",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "International Business",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "International Economics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "International Relations",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Labor & Employee Relations",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "Logic",
        "subjects": 9,
        "experts": 4
      },
      {
        "name": "Literature",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Macroeconomics",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Managerial Analytics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Marketing and PR",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Maths",
        "subjects": 15,
        "experts": 7
      },
      {
        "name": "Mechanical Engineering",
        "subjects": 16,
        "experts": 7
      },
      {
        "name": "Microbiology",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Microeconomics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Music",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Nuclear Physics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Organization Development",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Philosophy",
        "subjects": 10,
        "experts": 4
      },
      {
        "name": "Performance Arts",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Political Behavior",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Political Economy",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Political Science",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Probability & Statistics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Project Management",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Psychology",
        "subjects": 14,
        "experts": 6
      },
      {
        "name": "Public Health",
        "subjects": 13,
        "experts": 5
      },
      {
        "name": "Social Studies",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Sociology",
        "subjects": 11,
        "experts": 5
      },
      {
        "name": "Statistics",
        "subjects": 12,
        "experts": 5
      },
      {
        "name": "Visual Arts",
        "subjects": 13,
        "experts": 5
      }


    ];
    return this._courses;
  }
  getExams() {
    this.exams = [
      {
        name: 'ATI TEAS'

      },
      {
        name: 'PROCTORED'

      },
      {
        name: 'HESI'

      },
      {
        name: 'COMPTIA'

      },
      {
        name: 'GRE'

      },
      {
        name: 'GED'

      },
      {
        name: 'OTHER'

      },
    ]
    return this.exams;
  }

}
