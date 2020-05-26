def create_batches
  create_batch(
    activation_start: 30.minutes.ago.change(usec: 0),
    activation_end: 30.minutes.since.change(usec: 0),
    company_name: 'Перекресток'
  )

  create_batch(
    activation_start: 1.hour.since.change(usec: 0),
    activation_end: 2.hours.since.change(usec: 0),
    company_name: 'Братья Караваевы',
  )

  create_batch(
    activation_start: 90.minutes.since.change(usec: 0),
    activation_end: 150.minutes.since.change(usec: 0),
    company_name: 'МакДоналдс',
  )

  create_batch(
    activation_start: 2.hours.since.change(usec: 0),
    activation_end: 4.hours.since.change(usec: 0),
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
