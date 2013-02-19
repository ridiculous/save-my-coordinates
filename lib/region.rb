class Region

  attr_reader :routes

  def initialize
    @routes = self.instance_variables.map { |name| self.instance_variable_get(name) }
  end

end