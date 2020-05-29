def create_batches
  create_batch(
    activation_start: 1.hour.ago.change(sec: 0, usec: 0),
    activation_end: 10.hours.since.change(sec: 0, usec: 0),
    company_name: 'Перекресток'
  )

  create_batch(
    activation_start: 12.hours.since.change(sec: 0, usec: 0),
    activation_end: 20.hours.since.change(sec: 0, usec: 0),
    company_name: 'Перекресток'
  )

  create_batch(
    activation_start: 18.hours.since.change(sec: 0, usec: 0),
    activation_end: 24.hours.since.change(sec: 0, usec: 0),
    company_name: 'Братья Караваевы',
  )

  create_batch(
    activation_start: 18.hours.since.change(sec: 0, usec: 0),
    activation_end: 24.hours.since.change(sec: 0, usec: 0),
    company_name: 'МакДоналдс',
  )

  create_batch(
    activation_start: 12.hours.since.change(sec: 0, usec: 0),
    activation_end: 20.hours.since.change(sec: 0, usec: 0),
    company_name: 'Французская пекарня',
  )
end

def create_batch(activation_start:, activation_end:, company_name:)
  company = Company.find_by(company_name: company_name)

  Batch.create!(
    activation_start: activation_start,
    activation_end: activation_end,
    outlet_id: company.outlet_ids.first,
    discount: Batch.discounts.keys.sample
  )
end
