from sqlalchemy.orm import Session

from app.models.Report import Report
from app.core.Report import ReportCreate


def get_all_reports(db: Session):
    return db.query(Report).all()


def get_report_by_id(db: Session, report_id: int):
    return db.query(Report).filter(
        Report.id == report_id
    ).first()


def create_report(db: Session, report: ReportCreate):
    new_report = Report(
        title=report.title,
        description=report.description
    )

    db.add(new_report)
    db.commit()
    db.refresh(new_report)

    return new_report


def delete_report(db: Session, report_id: int):
    report = get_report_by_id(db, report_id)

    if report:
        db.delete(report)
        db.commit()

    return report