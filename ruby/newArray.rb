class Newarray
  def initialize
    @array = []
  end

  def add(value)
    @array << value
  end

  def push_many(*values)
    @array.push(*values)
  end

  def remove(value)
    @array.delete(value)
  end

  def display
    puts @array.inspect
  end

  def size
    @array.size
  end

  def clear
    @array.clear
  end
  
  def empty?
    @array.empty?
  end

  def include?(value)
    @array.include?(value)
  end
  def index(value)
    @array.index(value)
  end

  def each(&block) 
    @array.each(&block)
  end

  def concat(other_array)
    @array.push(*other_array)
  end

  def map_with_index(&block)
    @array.each_with_index.map(&block)
  end

  def select(&block)  
    @array.select(&block)
  end 

end

# Example usage:
arr = Newarray.new
arr.add(1)
arr.add(2)
arr.add(2)
arr.display # Output: [1, 2, 3]
arr.remove(2)
arr.display # Output: [1, 3]
arr.display # Output: [1]
puts arr.size # Output: 1
arr.clear
arr.display # Output: []
puts arr.empty? # Output: true
puts arr.include?(1) # Output: false
puts arr.index(1) # Output: nil
arr.push_many(4, 5, 6)
arr.each { |value| puts value } # Output: 4 5 6
arr.concat([7, 8, 9])
arr.display # Output: [4, 5, 6, 7, 8, 9]
arr.map_with_index { |value, index| value * index }# Output: [0, 5, 12, 21, 32, 45]
arr.select { |value| value > 5 } # Output: [6, 7, 8, 9]
