import tc_scrape
from apscheduler.schedulers.blocking import BlockingScheduler

sched = BlockingScheduler()

# Run tc_scrape.main every hour
sched.add_job(tc_scrape.main, 'interval', hours=1)

sched.start()