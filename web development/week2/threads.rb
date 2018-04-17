def add_one_to_million_twice_without_threads()
  sum = 0

  for i in 1..5_000_000 do
    sum += i
  end

  for i in 5_000_001..10_000_000 do
    sum += i
  end

  puts sum
end

start_time = Time.now
add_one_to_million_twice_without_threads
end_time = Time.now

def add_one_to_million_twice_with_threads()
  sum = 0

  thread1 = Thread.new {
    for i in 1..5_000_000 do
      #puts sum
      sum += i
    end
  }

  thread2 = Thread.new {
    for i in 5_000_001..10_000_000 do
      #puts sum
      sum += i
    end
  }

  thread1.join
  thread2.join
  puts sum
end


thread_start_time = Time.now
add_one_to_million_twice_with_threads
thread_end_time = Time.now

puts "Without threads: #{end_time.round(4) - start_time.round(4)}s"
puts "With threads: #{thread_end_time.round(4) - thread_start_time.round(4)}s"

#
# def sleep_five_seconds_without_threads()
#   sleep(5)
# end
#
# def sleep_five_seconds_with_threads()
#   thread1 = Thread.new {
#     sleep(1)
#   }
#
#   thread2 = Thread.new {
#     sleep(1)
#   }
#
#   thread3 = Thread.new {
#     sleep(1)
#   }
#
#   thread4 = Thread.new {
#     sleep(1)
#   }
#
#   thread5 = Thread.new {
#     sleep(1)
#   }
#
#   thread1.join
#   thread2.join
#   thread3.join
#   thread4.join
#   thread5.join
# end
#
# start_time = Time.now
# sleep_five_seconds_without_threads
# end_time = Time.now
#
# thread_start_time = Time.now
# sleep_five_seconds_with_threads
# thread_end_time = Time.now
#
# puts "Without threads: #{end_time.round(4) - start_time.round(4)}s"
# puts "With threads: #{thread_end_time.round(4) - thread_start_time.round(4)}s"
